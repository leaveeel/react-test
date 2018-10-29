import React from 'react'
import Backpage from './backpage'

const AppTop = (props) => (
	<header>
	<div>
	<h1>{props.word}</h1>
	<Back show={props.word==='登录'?false:true} />
	</div>
	</header>
)

class Back extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: props.show
		}
	}

	render() {
		if (this.state.show) {
			return (<Backpage className='back' text='返回' />)
		}
		return ''
	}
}

export default AppTop