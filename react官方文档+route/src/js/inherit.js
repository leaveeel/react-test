import React from 'react';

/*function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-'+props.color}>
		{props.children}
		</div>
	)
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
		<h1 className="Dialog-title">
		Welcome
		</h1>
		<p className="Dialog-message">
		thank
		</p>
		</FancyBorder>
	)
}
*/
/*function Contacts() {
	return <div className="Contacts" />
}

function Chat() {
	return <div className="Chat" />
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
		<div className="SplitPane-left">
		{props.left}
		</div>
		<div className="SplitPane-right">
		{props.right}
		</div>
		</div>
	)
}

function App() {
	return (
		<SplitPane left={<Contacts />} right={<Chat />} />
	)
}
*/
/*function FancyBorder(props) {
	return (
		<div className={"FancyBorder FancyBorder-"+props.color}>
		{props.children}
		</div>
	)
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
		<h1 className="Dialog-title">
		{props.title}
		</h1>
		<p className="Dialog-message">
		{props.message}
		</p>
		</FancyBorder>
	)
}

function WelcomeDialog() {
	return (
		<Dialog title="Welcome" message="thank" />
	)
}
*/
function FancyBorder(props) {
	return (
		<div className={"FancyBorder FancyBorder-"+props.color}>{props.children}</div>
	)
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
		<h1 className="Dialog-title">
		{props.title}
		</h1>
		<p className="Dialog-message">
		{props.message}
		</p>
		{props.children}
		</FancyBorder>
	)
}

class SignUpDialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			login: ''
		}
	}

	render() {
		return (
			<Dialog title="mars" message="how">
			<input value={this.state.login} onChange={this.handleChange} />
			<button onClick={this.handleSignUp}>
			Sign Me Up!
			</button>
			</Dialog>
		)
	}

	handleChange = (e) => {
		this.setState({
			login: e.target.value
		})
	}

	handleSignUp = () => {
		alert(`Welcome, ${this.state.login}!`)
	}
}

export default SignUpDialog