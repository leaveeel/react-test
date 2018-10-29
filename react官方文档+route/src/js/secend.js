import React from 'react';

var times = 1;
class Secend extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			time: 1
		}
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(), 1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		times = times + 1
		this.setState({
			time: times
		})
	}
	render() {
		return (
			<div>{this.state.time} secends</div>
		)
	}
}

export default Secend