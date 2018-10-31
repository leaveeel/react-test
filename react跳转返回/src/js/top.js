import React from 'react'
import Backpage from './backpage'

class AppTop extends React.Component {
	componentWillMount() {
		const storage = window.localStorage
		this.setState(JSON.parse(storage.getItem('toTop')))
		storage.setItem('ddd', 111)
	}

	componentWillUnmount() {
		window.localStorage.clear()

	}

	render() {
		console.log(this.state)
		return (
			<header>
			<div>
			<h1>{this.state.text}</h1>
			<Backpage show={this.state.canBack?true:false} />
			</div>
			</header>
		)
	}
}


export default AppTop