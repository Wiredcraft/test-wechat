import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import RepoDetail from '../../components/RepoDetail/RepoDetail'


export default class Detail extends Component {

    config = {
        navigationBarTitleText: 'Repo'
    };

    constructor(props){

        super(props);
        this.state = {
            data : {}
        };
    }

    componentDidMount () {
        this.setState({
            data : this.$router.params
        });
    }

    render () {

        const {data} = this.state;

        return (
            <View className="detail">
                <RepoDetail repo={data} />
            </View>
        )
    }
}

