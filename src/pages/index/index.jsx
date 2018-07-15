import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import SearchInput from '../../components/SearchInput/SearchInput'
import RepoList from '../../components/RepoList/RepoList'
import LoadStatus from '../../components/LoadStatus/LoadStatus'
import LOAD_STATUS from '../../confs/loadStatus';

import api from '../../services/api'
import './index.scss'



/**
 * Format the repos data to [{name, url, description }...].
 * The url contain a repo data as "name=foo&full_name=foo/bar...".
 * @param {array}  repos repo data
 * @return {array}
 */
const formatReposData = (repos)=>{

    const url = '../detail/detail';

    const toParams = (repo)=>
        ['name', 'full_name', 'description', 'language', 'owner'].map(field => {
            let name = field;
            let val = repo[field];

            if( field === 'owner' ){
                name = 'avatar_url';
                val = repo[field]['avatar_url'];
            }
            return `${name}=${val}`
        }).join('&');

    return repos.map( repo =>({
            url: `${url}?${ toParams(repo) }`,
            name: repo['name'],
            description: repo['description']
        }));

};

export default class Index extends Component {

    static config = {
        navigationBarTitleText: 'Search'
    };

    constructor(props){
        super(props);

        this.state = {
            orgsData: [],
            loadStatus: LOAD_STATUS.normal
        }
    }
    handleConfirm(e) {

        console.log(this);


        const val = e.currentTarget.value;
        const self = this;

        if(val.trim() === ''){
            this.setState({
                orgsData : [],
                loadStatus: LOAD_STATUS.normal
            });
            return
        }else{
            this.setState({
                loadStatus: LOAD_STATUS.loading
            })
        }


        api.getReposFromeOrgs(val).then((res) => {
            if( res.statusCode === 200){
                self.setState({
                    orgsData : res.data,
                    loadStatus: LOAD_STATUS.success
                });
            }else{
                this.setState({
                    loadStatus: LOAD_STATUS.noFound
                });
            }
        },()=>{
            this.setState({
                loadStatus: LOAD_STATUS.error
            })
        })

    }
    render() {
        return (
            <View className="index">
                <SearchInput placeholder="Enter organization" onConfirm={this.handleConfirm.bind(this)}/>
                {
                    this.state.loadStatus === LOAD_STATUS.success
                    || this.state.loadStatus === LOAD_STATUS.normal
                        ? <RepoList repos={ formatReposData( this.state.orgsData) }  />
                        : <LoadStatus status={ this.state.loadStatus } />
                }
            </View>
        )
    }
}

