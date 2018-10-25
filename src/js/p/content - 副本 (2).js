import React from 'react'
import ReactDOM from 'react-dom'
/*import axios from 'axios'
 */
function SearchBar(props) {
	return (
		<form>
		<input className="searchInput" placeholder="Search..." />
		<input type="checkbox" />Only show products in stock
		</form>
	)
}

function Titcont(props) {
	return (
		<div>
		<h1>
		<label>name</label>
		<span>price</span>
		</h1>
		</div>
	)
}

class Newarr extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [],
			contstr: ''
		}
	}

	componentDidMount() {
		/*		axios.get(`json/content.json`).then(res => {
				const arr = res.data
				*/
		const arr = require('./json/content.json')
		let narr = arr.map(function(item, index, arr) {
			const i = arr.find(_item => item.title === _item.title)
			if (i !== item) {
				i.name.push(item.name)
				i.price.push(item.price)
				i.stocked.push(item.stocked)
				return undefined
			} else {
				i.name = [i.name]
				i.price = [i.price]
				i.stocked = [i.stocked]
				return i
			}
		}).filter(item => item !== undefined)
		/*		debugger
		 */
		console.log(narr)
		let contstr = this.state.contstr
		for (let i = 0; i < narr.length; i++) {
			contstr = contstr + '<dl>' + (narr[i].title ? '<dt>' + narr[i].title + '</dt>' : '<dt>other</dt>')
			for (let j = 0; j < narr[i].name.length; j++) {
				contstr = contstr + '<dd>' + (narr[i].stocked[j] ? '<label>' + narr[i].name[j] + '</label>' : '<label style="color:red">' + narr[i].name[j] + '</label>') + '<span>' + narr[i].price[j] + '</span></dd>'
			}
			contstr = contstr + '</dl>'
		}
		this.setState({
			arr: narr,
			contstr: contstr
		})
		/*		})
		 */
	}

	render() {
		return (<div dangerouslySetInnerHTML={{__html:this.state.contstr}} />)
	}
}

ReactDOM.render(
	<div>
	<SearchBar />
	<Titcont />
	<Newarr />
	</div>,
	document.getElementById('content')
)