import React from 'react';
import Submenu from './submenu';
import {
    Nav,
    FirstMenu,
    FMa,
    DownArrow
} from './style';

class Navigate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    componentWillMount() {
        let nav = require('./json.json').nav
        let login = require('./json.json').isLogin
        this.setState({
            nav: nav,
            login: login
        })
    }

    render() {
        return (
            <Nav>
            {this.state.nav.map((data,index) => 
                <FirstMenu key={index}>
                {data.subMenu ? 
                    <FMa>{data.label}<DownArrow /></FMa> : 
                    <FMa href={data.link} choose={index === this.state.index ? true : false} tips={this.state.login && data.tips ? true : false}>{data.label}</FMa>
                }
                {data.subMenu ? 
                    <Submenu data={data.subMenu} /> : 
                    ''
                }
                </FirstMenu>
            )}
            </Nav>
        )
    }
}

export default Navigate;
