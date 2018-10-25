import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value.toUpperCase()
		})
	}

	handleSubmit = (event) => {
		alert('submit:' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label>input:<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
			<input type="submit" value="Submit" />
			</form>
		)
	}
}

class EssayForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'textarea'
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit = (event) => {
		alert('submit:' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label>textarea:<textarea value={this.state.value} onChange={this.handleChange} /></label>
			<input type="submit" value="Submit" />
			</form>
		)
	}
}

class FlavorForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'coconut'
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit = (event) => {
		alert('submit:' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label>select:<select value={this.state.value} onChange={this.handleChange}>
			<option value="grapefruit">grapefruit</option>
			<option value="lime">lime</option>
			<option value="coconut">coconut</option>
			<option value="mango">mango</option>
			</select>
			</label>
			<input type="submit" value="Submit" />
			</form>
		)
	}
}

class Reservation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		}
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event) => {
		alert('isGoing:' + this.state.isGoing + '\nnumberOfGuests' + this.state.numberOfGuests)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label>isGoing:<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} /></label>
			<br />
			<label>numberOfGuests<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
			</label>
			<input type="submit" value="Submit" />
			</form>
		)
	}
}

ReactDOM.render(
	(<div><NameForm /><EssayForm /><FlavorForm/><hr /><Reservation /></div>),
	document.getElementById('form')
)