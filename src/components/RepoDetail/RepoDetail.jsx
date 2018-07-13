import { Taro, Component } from '@tarojs/taro'
import {PropTypes} from 'prop-types'
import { View, Text, Image } from '@tarojs/components'
import {classNamesGeneration} from "../../utils/util";

import "./RepoDetail.scss"

const COMPONENT_CLASS_NAME = 'ui-repo-detail';
const genClassNames = classNamesGeneration( COMPONENT_CLASS_NAME );


export default class RepoDetail extends Component{

    static propTypes = {
        repo: PropTypes.object,
    };
    constructor(props) {
        super(props)
    }

    render(){


        const {repo} = this.props;
        console.log('detail',repo);

        return (
            <View className={genClassNames()}>
                <View className={genClassNames('header')}>
                    <View className={genClassNames('full-name')}><Text>{ repo.full_name }</Text></View>
                    <View className={genClassNames('owner')}>
                        <Text>owner</Text><Image className={genClassNames('avatar')} src={repo.avatar_url} mode="aspectFit" />
                    </View>
                </View>
                <View className={genClassNames('section')} >
                    <View className={genClassNames('name')}><Text>{ repo.name }</Text></View>
                    <View className={genClassNames('language')}><Text>language: { repo.language }</Text></View>
                    <View className={genClassNames('description')}><Text>{ repo.description }</Text></View>
                </View>
            </View>
        )
    }
}