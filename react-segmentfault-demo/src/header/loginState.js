import React from 'react';
import FontAwesome from 'react-fontawesome';
import User from './user';
import MenuBox from './menuBox';
import {
    UnLogin,
    IsLogin,
    Make
} from './style';
import { getCookie, setCookie } from '../common/cookie';

class LoginState extends React.Component {
    componentWillMount() {
        this.setState({
            isLogin: getCookie('login') === 'true' ? true : false,
            buttonClick: false,
            menubox: false,
            userShow: false
        })
        document.addEventListener('click', this.boxHide)
        console.log(getCookie('login') )
    }

    boxHide = () => {
        this.setState({
            menubox: false
        })
    }

    buttonFocus = () => {
        this.setState({
            buttonClick: this.state.buttonClick ? false : true
        })
    }

    menuboxShow = (e) => {
        let box = e.currentTarget.getAttribute('box')
        if (box === this.state.box) {
            this.setState({
                menubox: this.state.menubox ? false : true
            })
        } else {
            this.setState({
                menubox: true,
                box: box
            })
        }
    }

    hideBlock = (e) => {
        e.nativeEvent.stopImmediatePropagation()
    }

    userOver = () => {
        this.setState({
            userShow: true
        })
    }

    userLeave = () => {
        this.setState({
            userShow: false
        })
    }

    loginClick = () => {
        setCookie('login', true)
        this.setState({
            isLogin: getCookie('login') === 'true' ? true : false,
        })
    }

    render() {
        if (this.state.isLogin) {
            return (
                <IsLogin>
                    <li>
                        <button onClick={this.buttonFocus}>创建<i /></button>
                        <Make show={this.state.buttonClick}>
                            <li><a href='/ask'>提问题</a></li>
                            <li><a href='/submit'>发头条</a></li>
                            <li><a href='/write'>写文章</a></li>
                            <li><a href='/record'>记笔记</a></li>
                            <li><a href='/draft'>草稿箱</a></li>
                        </Make>
                    </li>
                    <li onClick={this.hideBlock}>
                        <FontAwesome name='bell-o' box='nfc' onClick={this.menuboxShow} />
                        {this.state.box === 'nfc' ?
                        <MenuBox name='nfc' show={this.state.menubox} /> : 
                        ''}
                    </li>
                    <li onClick={this.hideBlock}>
                        <FontAwesome name='envelope-o' box='msg' onClick={this.menuboxShow} />
                        {this.state.box === 'msg' ?
                        <MenuBox name='msg' show={this.state.menubox} /> : 
                        ''}
                    </li>
                    <li onMouseOver={this.userOver} onMouseLeave={this.userLeave}>
                        <a href='/u'> </a>
                        <User show={this.state.userShow} />
                    </li>
                </IsLogin>
            )
        }
        return (
            <UnLogin>
                <li>
                    <button className='login' onClick={this.loginClick}>立即登录</button>
                    <button className='register'>免费注册</button>
                </li>
            </UnLogin>
        )
    }
}

export default LoginState;
