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
				text: 'hhaa'
			}
		}
	}

	componentDidMount() {
		const url = '/top?title=' + this.state.title + '&link=' + this.state.link + '&localURL=' + this.state.localURL
		this.setState({
			url: url
		})
	}

	render() {
		return (
			<Jumppage aim={this.state.topage} takeprops={this.state.takeprops} target={this.state.target} />
		)
	}
}



export default Home