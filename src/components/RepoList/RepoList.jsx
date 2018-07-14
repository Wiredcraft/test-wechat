import { Taro, Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {PropTypes} from 'prop-types'


import {classNamesGeneration} from "../../utils/util";
import RepoItem from './RepoItem'
import './RepoList.scss'


const COMPONENT_CLASS_NAME = 'ui-repo-list';
const genClassNames = classNamesGeneration( COMPONENT_CLASS_NAME );

class RepoList extends Component {

    static propTypes = {
        repos: PropTypes.array
    };

    constructor(props) {
        super(props)
    }
    render () {
        const { repos } = this.props;
        return (
            <View className={ genClassNames() }>
                {
                    repos.map((repo, index)=>
                        <RepoItem repo={ repo } key={index} />
                    )
                }
            </View>
        )
    }
}

export default RepoList
