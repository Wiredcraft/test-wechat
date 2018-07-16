import Taro, { Component } from '@tarojs/taro'
import { Navigator, View, Text } from '@tarojs/components'
import {PropTypes} from 'prop-types'
import {classNamesGeneration} from "../../utils/util";

const COMPONENT_CLASS_NAME = 'ui-repo-list-repo';
const genClassNames = classNamesGeneration( COMPONENT_CLASS_NAME );


export default class RepoItem extends Component{

    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    };


    constructor(props) {
        super(props)
    }
    render(){

        const {url, name, description} = this.props;

        return (
            <Navigator url={ url }>
                <View className={genClassNames()} hoverClass={genClassNames('hover')}>
                    <View className={genClassNames('title')}><Text>{ name }</Text></View>
                    <View className={genClassNames('description')}><Text>{ description }</Text></View>
                </View>
            </Navigator>
        )
    }
}