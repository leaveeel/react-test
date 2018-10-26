import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment() {
    return (
        <div className="Comment">
        <UserInfo attr={comment.author} />
        <div className="Comment-text">
        {comment.text}
        </div>
        <div className="Comment-date">
        {formatDate(comment.date)}
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

export default Comment