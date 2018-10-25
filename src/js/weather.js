import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Y</p>
	}
	return <p>N</p>
}

const scaleNames = {
	c: '℃',
	f: '℉'
}

class TemperatureInput extends React.Component {

	handleChange = (e) => {
		this.props.onTemperatureChange(e.target.value)
	}

	render() {
		const temperature = this.props.temperature
		const scale = this.props.scale
		return (
			<fieldset>
			<legend>{scaleNames[scale]}:</legend>
			<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		)
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			temperature: '',
			scale: 'c'
		}
	}

	handleCelsiusChange = (temperature) => {
		this.setState({
			scale: 'c',
			temperature
		})
	}

	handleFahrenheitChange = (temperature) => {
		this.setState({
			scale: 'f',
			temperature
		})
	}

	render() {
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return (
			<div>
			<TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
			<TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
			<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		)
	}
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) {
		return ''
	}
	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000
	return rounded.toString()
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('weather')
)