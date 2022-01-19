import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Hello its login page</h1>
                <button type="button" onClick={this.props.myState}>Login</button>
            </div>
        )
    }
}
