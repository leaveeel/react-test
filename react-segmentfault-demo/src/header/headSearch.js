import React from 'react';
import FontAwesome from 'react-fontawesome'
import {
    Search
} from './style';

class HeadSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false
        }
    }

    onFocus = () => {
        this.setState({
            focus: true
        })
    }

    onBlur = () => {
        this.setState({
            focus: false
        })
    }

    render() {
        return (
            <Search action='https://segmentfault.com/search' focus={this.state.focus}>
                <button><FontAwesome name='search' /></button>
                <input name='q' type='text' placeholder='搜索问题或关键字' onFocus={this.onFocus} onBlur={this.onBlur} />
            </Search>
        )
    }
}

export default HeadSearch;
