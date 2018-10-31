import React from 'react'

class Backpage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: props.show
		}
	}

	render() {
		if (this.state.show) {
			return (
				<a className='back' href='javascript: history.back(0)'>返回</a>
			)
		}
		return ''
	}
}

export default Backpage