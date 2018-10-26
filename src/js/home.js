import React from 'react';
import {
	Link
} from 'react-router-dom';

const Linklist = () => (
	<div className="linklist">
	<p><Link to='/secend'>secend</Link></p>
	<a href="/top">top</a>
	<a href="/props">props</a>
	<a href="/comment">comment</a>
	<a href="/State">State</a>
	<a href="/Toggle">Toggle</a>
	<a href="/Greeting">Greeting</a>
	<a href="/Warning">Warning</a>
	<a href="/list">list</a>
	<a href="/keys">keys</a>
	<a href="/form">form</a>
	<a href="/weather">weather</a>
	<a href="/inherit">inherit</a>
	<a href="/Content2">Content2</a>
	<a href="/FilterableProductTable">FilterableProductTable</a>
	</div>
)

export default Linklist