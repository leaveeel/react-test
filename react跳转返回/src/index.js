import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import './css/top.css';
import Home from './js/home'
import AppTop from './js/top'


const SiteRouter = () => (
	<Router>
	<Switch>
	<Route exact path='/home' component={Home} />
	<Route path='/top' component={AppTop} />
	<Redirect to='/Home' />
	</Switch>
	</Router>
)

ReactDOM.render(
	<SiteRouter />,
	document.getElementById('top')
);