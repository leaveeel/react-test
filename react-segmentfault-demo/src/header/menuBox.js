import React from 'react';
import FontAwesome from 'react-fontawesome'
import {
    Opts,
    OptsHli
} from './style';

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

export default MenuBox;
