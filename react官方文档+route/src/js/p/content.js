import React from 'react'

function SearchBar(props) {
	return (
		<form>
		<input className="searchInput" placeholder="Search..." value={props.filterText} onChange={props.onChange} />
		<input type="checkbox" checked={props.inStockOnly} onClick={props.onClick} />
		Only show products in stock
		</form>
	)
}

function Thead() {
	return (
		<thead>
		<tr>
		<th>name</th>
		<th>price</th>
		</tr>
		</thead>
	)
}

function Th(props) {
	return (
		<tr title={props.title}><th>{props.title}</th></tr>
	)
}

function Td(props) {
	return (
		<tr title={props.title}>
		{props.stocked ? <td>{props.name} </td> : <td style={{color: 'red'}}>{props.name}</td>}
		<td>{props.price}</td>
		</tr>
	)
}

function getarr() {
	const arr = require('./json/content.json')
	let titarr = [],
		newarr = []
	for (let i in arr) {
		if (titarr.indexOf(arr[i].title) === -1) {
			if (!arr[i].title) {
				titarr.push('other')
			} else {
				titarr.push(arr[i].title)
			}
		}
	}
	for (let i in titarr) {
		for (let j in arr) {
			if (titarr[i] === arr[j].title || (!arr[j].title && titarr[i] === 'other')) {
				newarr.push(arr[j])
			}
		}
	}
	return newarr
}

class Tbody extends React.Component {
	render() {
		const arr = getarr()
		let lastarr = [],
			lastCategory = null
		arr.forEach((arr) => {
			if (arr.name.indexOf(this.props.filterText) === -1 || (!arr.stocked && this.props.inStockOnly)) {
				return
			}
			if (arr.title !== lastCategory) {
				if (!arr.title) {
					lastarr.push(<Th title="other" key={arr.price} />);
				} else {
					lastarr.push(<Th title={arr.title} key={arr.price} />);
				}
			}
			lastarr.push(<Td stocked={arr.stocked} name={arr.name} price={arr.price} title={arr.title} key={arr.name} />);
			lastCategory = arr.title;
		})
		return (
			<tbody>{lastarr}</tbody>
		)
	}
}

class Content2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}

	change = (e) => {
		this.setState({
			filterText: e.target.value
		})
	}

	choose = (e) => {
		if (!this.state.inStockOnly) {
			this.setState({
				inStockOnly: true
			})
		} else {
			this.setState({
				inStockOnly: false
			})
		}
	}

	render() {
		return (
			<div>
			<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onChange={this.change} onClick={this.choose} />
			<table>
			<Thead />
			<Tbody  filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
			</table>
			</div>
		)
	}
}

export default Content2