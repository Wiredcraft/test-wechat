import Taro, { Component } from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import {PropTypes} from 'prop-types'

import {UUID, classNamesGeneration } from "../../utils/util";

import './SearchInput.scss'


const COMPONENT_CLASS_NAME = 'ui-search-input';
const genClassNames = classNamesGeneration( COMPONENT_CLASS_NAME );


class SearchInput extends Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onConfirm: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.id = this.props.id || UUID(COMPONENT_CLASS_NAME);

        this.state = {
            isFocus: false,
            isTop: false
        }

    }
    handleFocus(){
        this.setState({
           isFocus : true,
           isTop: true
        });
    }
    handleBlur(e){
        this.setState({
            isFocus: false,
            isTop: !! e.currentTarget.value
        });
    }
    handleConfirm(e){
        this.props.onConfirm(e);
    }
    render () {

        const inputID = `${ this.id }-input`;
        const { isFocus, isTop } = this.state;

        return (
            <View id={`${this.id}`}  className={ genClassNames() }>
                <View  className={ genClassNames('wrap') }>
                <Label className={genClassNames({
                           lab: true,
                           "lab-is-top": isTop
                       })}
                       for={ inputID }>{ this.props.placeholder }</Label>
                <Input placeholder={ this.props.placeholder }
                       onFocus={this.handleFocus}
                       onBlur={this.handleBlur}
                       id={ inputID }
                       onConfirm={this.handleConfirm}
                       placeholder-class={ genClassNames('inp-placeholder') }
                       className={ genClassNames({
                           inp: true,
                           "inp-is-focus": isFocus
                       }) }/>
                </View>
            </View>
        )
    }
}

export default SearchInput
