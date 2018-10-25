import React from 'react';
import ReactDOM from 'react-dom';

function ASD(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Ass() {
    return (
        <div>
        <ASD name='asfg' /> 
        <ASD name = 'awf' />
        <ASD name='ba' />
        </div>
    )
}
ReactDOM.render(
    <Ass />,
    document.getElementById('props')
);