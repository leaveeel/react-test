import React from 'react'
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
    IsLogin
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
                <button>搜索</button>
                <input name='q' type='text' placeholder='搜索问题或关键字' onFocus={this.onFocus} onBlur={this.onBlur} />
            </Search>
        )
    }
}

class LoginState extends React.Component {
    componentWillMount() {
        let isLogin = require('./json.json').isLogin
        this.setState({
            isLogin: isLogin
        })
    }

    render() {
        if (this.state.isLogin) {
            return ''
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