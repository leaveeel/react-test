import React from 'react'
import {
    Out,
    Head,
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
    ItemMore
} from './style'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            nav: [{
                label: '首页',
                link: '/',
            }, {
                label: '问答',
                link: '/',
            }, {
                label: '专栏',
                link: '/',
            }, {
                label: '讲堂',
                link: '/',
            }, {
                label: '发现',
                link: '/',
                subMenu: [{
                    label: '圈子',
                    link: ''
                }, {
                    label: '活动',
                    link: ''
                }, {
                    label: '标签',
                    link: ''
                }, {
                    label: '找工作',
                    link: ''
                }, {
                    label: '排行榜',
                    link: ''
                }, {
                    label: '徽章',
                    link: ''
                }, {
                    label: '笔记',
                    link: ''
                }, {
                    label: '开发手册',
                    link: ''
                }, {
                    label: '广告投放',
                    link: ''
                }]
            }],
            recommend: [{
                title: '领域驱动设计中国峰会 2018',
                link: '1',
                city: '北京',
                date: '2018-11-29 周四',
                state: '报名中'
            }, {
                title: 'GIAC2018全球互联网架构大会上海站',
                link: '2',
                city: '上海',
                date: '2018-11-23 周五',
                state: '报名中'
            }]
        }
    }

    render() {
        return (
            <Out>
			<Head>
			<Logo href='/'></Logo>
			<Nav>
			{
				this.state.nav.map((data,index) => <FirstMenu key={index}>
					{
						data.subMenu ? <FMa>{data.label}<DownArrow aria-hidden='true' /></FMa> : <FMa href={data.link} choose={index==this.state.index?true:false}>{data.label}</FMa>
					}
					{
						data.subMenu ? <SubMenu><SubUl>{data.subMenu.map((data,index) => <li key={index}><SubA href={data.link}>{data.label}</SubA></li>)}</SubUl><Recommend>
						{
							this.state.recommend.map((data,index)=><RecommendItem key={index}><a href={data.link}><ItemTitle>{data.title}</ItemTitle></a><ItemInfo><span>{data.city}</span> · <span>{data.date}</span> · <ItemState>{data.state}</ItemState></ItemInfo></RecommendItem>)
						}
						<ItemMore><a href=''>查看更多活动</a></ItemMore>
						</Recommend></SubMenu> : ''
					}
					</FirstMenu>)
			}
			</Nav>
			</Head>
			</Out>
        )
    }
}