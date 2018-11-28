import React from 'react';
import {
    Shadow
} from './style';

class LoginWindow extends React.Component {
    render() {
        return (
            <Shadow show={this.props.show}>
                <div className='main'></div>
            </Shadow>
        )
    }
}

export default LoginWindow
