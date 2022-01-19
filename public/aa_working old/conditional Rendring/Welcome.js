import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>welcome to dashboard</h1>
                <button onClick={this.props.myState}>Logout</button>
            </div>
        )
    }
}
