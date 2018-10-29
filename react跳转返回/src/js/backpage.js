import React from 'react'

class Backpage extends React.Component {
	constructor(props) {
		super(props)
		const prevURL = window.location.search.match(new RegExp("(^|&?)prevURL=([^]*)", "i"))[2]
		this.state = {
			backpage: prevURL
		}
	}

	render() {
		return (<a className={this.props.className} href={this.state.backpage}>{this.props.text}</a>)
	}
}

export default Backpage