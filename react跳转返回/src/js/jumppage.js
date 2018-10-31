import React from 'react'

class Jumppage extends React.Component {
	componentDidMount() {
		const storage = window.localStorage
		if (this.props.takeprops) {
			let getOBJ = this.props.takeprops
			storage.setItem('toTop', JSON.stringify(getOBJ))
		}
		console.log(JSON.parse(storage.getItem('toTop')))
	}

	render() {
		return (
			<a href={this.props.aim}>{this.props.val}</a>
		)
	}
}

export default Jumppage