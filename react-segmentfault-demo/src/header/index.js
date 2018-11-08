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
    Opts,
    OptsHli,
    UserMenu,
    Gold,
    Silver,
    Copper
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
        this.state = {
            active: 0,
            list: [{
                name: 'bullhorn',
            }, {
                name: 'commenting-o',
            }, {
                name: 'thumbs-o-up',
            }, {
                name: 'user-plus',
            }]
        }
    }

    getmsg = () => {
        let json = require('./json.json')
        var nfc
        if (this.state.active === 0) {
            nfc = json.general
        } else if (this.state.active === 1) {
            nfc = json.comment
        } else if (this.state.active === 2) {
            nfc = json.ranked
        } else if (this.state.active === 3) {
            nfc = json.followed
        }
        let msg = json.msg
        this.setState({
            nfc: nfc,
            msg: msg
        })
    }

    componentWillMount() {
        this.getmsg()
    }

    active = (e) => {
        let index = +e.currentTarget.getAttribute('data-index')
        this.setState({
            active: index,
        }, this.getmsg)
    }

    render() {
        if (this.props.name === 'nfc') {
            return (
                <Opts show={this.props.show}>
                    <ul className='head'>
                    {this.state.list.map((data,index) => 
                        <OptsHli key={index} data-index={index} active={this.state.active === index ? true : false} onClick={this.active}><FontAwesome name={data.name} /></OptsHli>
                    )}
                    </ul>
                    <ul className='body'>
                    {this.state.nfc.map((data,index) =>
                        <li key={index}>{data.title}</li>
                    )}
                    </ul>
                    <a className='foot' href='/user/notifications'>查看全部 »</a>
                </Opts>
            )
        }
        return (
            <Opts show={this.props.show}>
                    <ul className='head'>
                        <li>最近的私信</li>
                    </ul>
                    <ul className='body'>
                    {this.state.msg.map((data,index) =>
                        <li key={index}>{data.title}</li>
                    )}
                    </ul>
                    <a className='foot' href='/user/notifications'>查看全部 »</a>
                </Opts>
        )
    }
}

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prestige: 0,
            gold: 0,
            silver: 0,
            copper: 0
        }
    }

    render() {
        return (
            <UserMenu>
                <div className="head">
                    <label>{this.state.prestige} 声望</label>
                    <ul>
                        <li><Gold></Gold>{this.state.gold}</li>
                        <li><Silver></Silver>{this.state.silver}</li>
                        <li><Copper></Copper>{this.state.copper}</li>
                    </ul>
                </div>
            </UserMenu>
        )
    }
}

class LoginState extends React.Component {
    componentWillMount() {
        let isLogin = require('./json.json').isLogin
        this.setState({
            isLogin: isLogin,
            buttonClick: false,
            menubox: false
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
                    <li>
                        <a href='/u'> </a>
                        <User />
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