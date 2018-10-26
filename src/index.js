import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import './css/index.css';
import Linklist from './js/home'
import secend from './js/secend'
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
import inherit from './js/inherit'
import Content2 from './js/p/content'
import FilterableProductTable from './js/p/container'

const SiteRouter = () => (
	<Router>
	<Switch>
	<Route exact path='/home' component={Linklist} />
	<Route path='/secend' component={secend} />
	<Route path='/top' component={top} />
	<Route path='/props' component={props} />
	<Route path='/comment' component={comment} />
	<Route path='/State' component={State} />
	<Route path='/Toggle' component={Toggle} />
	<Route path='/Greeting' component={Greeting} />
	<Route path='/Warning' component={Warning} />
	<Route path='/list' component={list} />
	<Route path='/keys' component={keys} />
	<Route path='/form' component={form} />
	<Route path='/weather' component={weather} />
	<Route path='/inherit' component={inherit} />
	<Route path='/Content2' component={Content2} />
	<Route path='/FilterableProductTable' component={FilterableProductTable} />
	<Redirect to={'/home'} />
	</Switch>
	</Router>
)

ReactDOM.render(
	<SiteRouter />,
	document.getElementById('root')
);