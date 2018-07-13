import { Taro, Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {PropTypes} from 'prop-types'
import {classNamesGeneration} from "../../utils/util";

import loadStatus from '../../confs/loadStatus';
import './LoadStatus.scss'

const COMPONENT_CLASS_NAME = 'ui-load-status';
const genClassNames = classNamesGeneration( COMPONENT_CLASS_NAME );

export default class LoadStatus extends Component{

    static propTypes = {
        status: PropTypes.number
    };

    constructor(props) {
        super(props)
    }

    render(){
        const {status} = this.props;

        return (
            <View className={genClassNames()}>
                {
                    status === loadStatus.loading
                        ? <View class={genClassNames('loading')}>
                            <View class={genClassNames('loading-dot-1')}/>
                            <View class={genClassNames('loading-dot-2')}/>
                            <View class={genClassNames('loading-dot-3')}/>
                          </View>
                        : null
                }
                {
                    status === loadStatus.noFound
                        ? <View class={genClassNames('no-found')}>
                            <View class={genClassNames('no-found')}>
                                <View class={genClassNames('text-1')}>Oops!</View>
                                <View class={genClassNames('text-2')}>Could not find it.</View>
                            </View>
                          </View>
                        : null
                }
            </View>
        )
    }
}