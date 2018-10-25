import React from 'react';
import ReactDOM from 'react-dom';

var a = 1;

function tick() {
	a = a + 1;
	const el = (
		<div>last {a} secend</div>
	);
	ReactDOM.render(el, document.getElementById('secend'));
}
setInterval(tick, 1000)