import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
/*import secend from './js/secend'
import top from './js/top'
import props from './js/props'
import comment from './js/Comment'
import State from './js/State'
import Toggle from './js/Toggle'
import Greeting from './js/Greeting'
import Warning from './js/Warning'
import list from './js/list'
import keys from './js/keys'
import form from './js/form'
import weather from './js/weather'
import inherit from './js/inherit' */
import Content2 from './js/p/content'
import FilterableProductTable from './js/p/container'

ReactDOM.render(
	<Content2 />,
	document.getElementById('content2')
)

ReactDOM.render(
	<FilterableProductTable />,
	document.getElementById('container')
)