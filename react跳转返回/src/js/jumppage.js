import React from 'react'

class Jumppage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			prevURL: window.location.pathname + window.location.search
		}
		console.log(this.props)
	}

	componentDidMount() {
		var url
		if (this.props.takeprops) {
			let getOBJ = this.props.takeprops
			let keys = Object.keys(getOBJ)
			var getprops = ''
			for (let i in keys) {
				getprops = getprops + keys[i] + '=' + getOBJ[keys[i]] + '&'
			}
			url = this.props.aim + '?' + getprops + 'prevURL=' + this.state.prevURL
		} else {
			url = this.props.aim + '?prevURL=' + this.state.prevURL
		}
		console.log(url)
		this.setState({
			url: url
		})
	}

	render() {
		return (
			<a href={this.state.url} target={this.props.target}>to top</a>
		)
	}
}

export default Jumppage