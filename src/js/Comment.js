import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
        <UserInfo attr={props.author} />
        <div className="Comment-text">
        {props.text}
        </div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar" 
        src={props.attr.avatarUrl} 
        alt={props.attr.name} />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avatar attr={props.attr} />
        <div className="UserInfo-name">{props.attr.name}</div>
        </div>
    )
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
ReactDOM.render(
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
    document.getElementById('comment')
);