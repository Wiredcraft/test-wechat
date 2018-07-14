import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import SearchInput from '../../components/SearchInput/SearchInput'
import RepoList from '../../components/RepoList/RepoList'
import LoadStatus from '../../components/LoadStatus/LoadStatus'
import loadStatus from '../../confs/loadStatus';

import '../../components/LoadStatus/LoadStatus.scss'

import api from '../../services/api'
import './index.scss'



/**
 * format the repos data to [{name, full_name, description, language, avatar_url }...]
 * @param {array}  repos repo data
 * @return {array}
 */
const formatReposData = (repos)=>{

    const url = '../detail/detail';

    const toParams = (repo)=>
        ['name', 'full_name', 'description', 'language', 'owner'].map((field) => {
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
            loadStatus: loadStatus.normal,
            orgsData: []
        }
    }

    /**
     * clear the data to keep the result match searching.
     */
    clear (){
        this.setState({
            orgsData: []
        });
    }

    handleConfirm(e) {

        const val = e.currentTarget.value;
        const self = this;

        if(val.trim() === ''){
            this.clear();
            this.setState({
                loadStatus: loadStatus.normal
            });
            return
        }else{
            this.setState({
                loadStatus: loadStatus.loading
            })
        }


        api.getReposFromeOrgs(val).then((res) => {
            if( res.statusCode === 200){
                self.setState({
                    loadStatus: loadStatus.success,
                    orgsData : res.data
                });
            }else{
                this.setState({
                    loadStatus: loadStatus.noFound
                });
                this.clear();
            }
        },()=>{
            this.setState({
                loadStatus: loadStatus.error
            })
        })

    }
    render() {
        return (
            <View className="index">
                <SearchInput placeholder="Enter organization" onConfirm={this.handleConfirm.bind(this)}/>
                <RepoList repos={ formatReposData( this.state.orgsData) }  />
                {
                    this.state.loadStatus !== loadStatus.success ||
                    this.state.loadStatus !== loadStatus.normal
                        ? <LoadStatus status={ this.state.loadStatus } />:null
                }
            </View>
        )
    }
}

