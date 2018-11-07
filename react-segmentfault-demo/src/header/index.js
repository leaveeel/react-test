import React from 'react'
import FontAwesome from 'react-fontawesome'
import {
    Head,
    Main,
    MainLeft,
    Logo,
    Nav,
    FirstMenu,
    FMa,
    DownArrow,
    SubMenu,
    SubUl,
    SubA,
    Recommend,
    RecommendItem,
    ItemTitle,
    ItemInfo,
    ItemState,
    ItemMore,
    Search,
    MainRight,
    UnLogin,
    IsLogin,
    Make,
    Opts
} from './style'

class Submenu extends React.Component {
    componentWillMount() {
        let recommend = require('./json.json').recommend
        this.setState({
            recommend: recommend
        })
    }

    render() {
        if (this.state.recommend && this.state.recommend.length !== 0) {
            return (
                <SubMenu>
                    <SubUl>
                    {this.props.data.map((data,index) => 
                        <li key={index}>
                            <SubA href={data.link}>{data.label}</SubA>
                        </li>
                    )}
                    </SubUl>
                    <Recommend>
                    {this.state.recommend.map((data,index) => 
                        <RecommendItem key={index}>
                            <a href={data.link}>
                                <ItemTitle>{data.title}</ItemTitle>
                            </a>
                            <ItemInfo>
                                <span>{data.city}</span> · <span>{data.date}</span> · <ItemState>{data.state}</ItemState>
                            </ItemInfo>
                        </RecommendItem>
                    )}
                        <ItemMore>
                            <a href='/events'>查看更多活动</a>
                        </ItemMore>
                    </Recommend>
                </SubMenu>
            )
        }
        return (
            <SubMenu>
                <SubUl>
                {this.props.data.map((data,index) => 
                    <li key={index}>
                        <SubA href={data.link}>{data.label}</SubA>
                    </li>
                )}
                </SubUl>
            </SubMenu>
        )
    }
}

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

class MenuBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Opts>
                <ul className='head'>
                    <li><FontAwesome name='bullhorn' /></li>
                    <li><FontAwesome name='commenting-o' /></li>
                    <li><FontAwesome name='thumbs-o-up' /></li>
                    <li><FontAwesome name='user-plus' /></li>
                </ul>
                <ul className='body'>
                    
                </ul>
            </Opts>
        )
    }
}

class LoginState extends React.Component {
    componentWillMount() {
        let isLogin = require('./json.json').isLogin
        this.setState({
            isLogin: isLogin,
            buttonClick: false
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
                    <li>
                        <FontAwesome name='bell-o' />
                        <MenuBox name='nfc' />
                    </li>
                    <li>
                        <FontAwesome name='envelope-o' />
                    </li>
                    <li>
                        <a href='/u'> </a>
                        <div></div>
                    </li>
                </IsLogin>
            )
        }
        return (
            <UnLogin>
                <li>
                    <button className='login'>立即登录</button>
                    <button className='register'>免费注册</button>
                </li>
            </UnLogin>
        )
    }
}

export default function Header() {
    return (
        <Head>
            <Main>
                <MainLeft>
                    <Logo href='/'></Logo>
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