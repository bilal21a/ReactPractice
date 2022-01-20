import React, { Component } from 'react'

export default class App extends Component {
    state = {
        inp_value: "",
        div_value: "",
    }

    handleChange = (e) => {
        this.setState({ inp_value: e.target.value.toUpperCase() });
        this.setState({ div_value: e.target.value });
    }
    render() {
        return (
            <div>
                <form action="">
                    <h2>This will convert form to upper</h2>
                    <input type="text"
                        value={this.state.inp_value}
                        onChange={this.handleChange}
                    />
                    <div>{this.state.div_value }</div>
                </form>
            </div>
        )
    }
}
