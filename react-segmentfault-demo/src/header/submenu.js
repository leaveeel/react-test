import React from 'react';
import {
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

export default Submenu;
