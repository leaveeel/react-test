import React from 'react'
import FontAwesome from 'react-fontawesome'
import {
    Head,
    Main,
    MainLeft,
    Logo,
    MainRight,
    UnLogin,
    IsLogin,
    Make,
    UserMenu,
    Gold,
    Silver,
    Copper,
    Shadow
} from './style'
import Navigate from './navigate';
import HeadSearch from './headSearch';
import MenuBox from './menuBox';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            json: require('./user.json')
        }
    }

    render() {
        let data = this.state.json
        return (
            <UserMenu show={this.props.show}>
                <div className='head'>
                    <label>{data.score.prestige} 声望</label>
                    <ul>
                        <li><Gold></Gold><p>{data.score.gold}</p></li>
                        <li><Silver></Silver><p>{data.score.silver}</p></li>
                        <li><Copper></Copper><p>{data.score.copper}</p></li>
                    </ul>
                </div>
                <hr />
                <ul className='body'>
                {data.menu.map((menu, index)=>
                    <li key={index}><a href={'/u'+ menu.url}>{menu.name}</a></li>
                )}
                </ul>
                <hr />
                <div className='foot'>
                    <a href='/u'>用户申诉</a> · 
                    <a href='/advance'>建议反馈</a> · 
                    <a href='/u/invitation'>邀请朋友</a>
                    </div>
            </UserMenu>
        )
    }
}

class Window extends React.Component {
    render() {
        return (
            <Shadow show={this.props.show}>
                <div className='main'></div>
            </Shadow>
        )
    }
}

class LoginState extends React.Component {
    componentWillMount() {
        let isLogin = require('./json.json').isLogin
        this.setState({
            isLogin: isLogin,
            buttonClick: false,
            menubox: false,
            userShow: false
        })
        document.addEventListener('click', this.boxHide)
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

    buttonBlur = () => {
        this.setState({
            buttonClick: false
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
        this.setState({
            windowShow: true,
            windowName: 'login'
        }, function() {
            console.log(this.state.windowShow)
        })
    }

    registerClick = () => {
        this.setState({
            windowShow: true,
            windowName: 'register'
        }, function() {
            console.log(this.state.windowShow)
        })
    }

    render() {
        if (this.state.isLogin) {
            return (
                <IsLogin>
                    <li>
                        <button onClick={this.buttonFocus} onBlur={this.buttonBlur}>创建<i /></button>
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
                    <button className='register' onClick={this.registerClick}>免费注册</button>
                </li>
                <Window show={this.state.windowShow} name={this.state.windowName} />
            </UnLogin>
        )
    }
}

export default function Header() {
    return (
        <Head>
            <Main>
                <MainLeft>
                    <Logo href='/' />
                    <Navigate />
                    <HeadSearch />
                </MainLeft>
                <MainRight>
                    <LoginState />
                </MainRight>
            </Main>
        </Head>
    )
}
