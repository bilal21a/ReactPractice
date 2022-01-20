import React, { Component } from 'react'

export default class App extends Component {

    state = {
        color_state: false
    }
    changeColor = () => {
        this.setState({ color_state: true });
    }
    render() {
        const btnColor = {
            color: 'green'
        }
        if (this.state.color_state) {
            btnColor.color = "red"
        }
        return (
            <div>
                <button style={btnColor} onClick={this.changeColor}>hi</button>
            </div>
        )
    }
}
