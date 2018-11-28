import React from 'react';
import Submenu from './submenu';
import {
    Nav,
    FirstMenu,
    FMa,
    DownArrow
} from './style';
import { setCookie, getCookie} from '../common/cookie';

class Navigate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: require('./json.json').nav,
            login: getCookie('login') ? getCookie('login') : false,
            index: +getCookie('nav')
        }
    }

    navClick = (e) => {
        setCookie('nav', e.target.getAttribute('data-index'))
        this.setState({
            index: +getCookie('nav')
        })
    }

    render() {
        return (
            <Nav>
            {this.state.nav.map((data, index) => 
                <FirstMenu key={index}>
                {data.subMenu ? 
                    <FMa>{data.label}<DownArrow /></FMa> : 
                    <FMa href={data.link} choose={index === this.state.index ? true : false} tips={this.state.login && data.tips ? true : false} onClick={this.navClick} data-index={index}>{data.label}</FMa>
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
