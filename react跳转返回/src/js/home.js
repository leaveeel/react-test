import React from 'react'
import Jumppage from './jumppage.js'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			topage: '/top',
			takeprops: {
				title: 'index',
				link: 'home',
				font: 'weiruan',
				text: 'hhaa',
				canBack: true
			},
			val: 'totop'
		}
	}

	componentWillMount() {
		window.localStorage.clear()
	}

	render() {
		return (
			<Jumppage aim={this.state.topage} takeprops={this.state.takeprops} target={this.state.target} val={this.state.val} />
		)
	}
}



export default Home