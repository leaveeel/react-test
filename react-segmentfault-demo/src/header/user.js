import React from 'react';
import {
    UserMenu,
    Gold,
    Silver,
    Copper
} from './style'

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

export default User;
