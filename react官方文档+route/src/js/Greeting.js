import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }

    clicked = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    Info = () => {
        if (this.state.isLoggedIn) {
            return <h1>Welcom back!</h1>
        }
        return <h1>Please sign in.</h1>
    }

    LogButton = () => {
        if (this.state.isLoggedIn) {
            return <button onClick={this.clicked}>Logout</button>
        }
        return <button onClick={this.clicked}>Login</button>
    }

    render() {
        return (<div>
            <this.Info />
            <this.LogButton />
            </div>)
    }
}

export default Greeting