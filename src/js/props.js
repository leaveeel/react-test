import React from 'react';

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

export default Ass