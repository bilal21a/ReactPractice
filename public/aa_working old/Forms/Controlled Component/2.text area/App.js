import React, { Component } from 'react'

export default class App extends Component {
    state = {
        inp_value: "",
        txt_area_value: "",
    }

    handleChange = (e) => {
        this.setState({ txt_area_value: e.target.value });
    }
    render() {
        return (
            <div>
                <form action="">
                    <h2>This will convert TextArea to div</h2>
                    <textarea value={this.state.txt_area_value}
                    onChange={this.handleChange}
                    ></textarea>

                    {/* showing text area content in div  */}
                    <div>{this.state.txt_area_value}</div>
                </form>
            </div>
        )
    }
}
