import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: "",
        password: "",
        address: "",
    }

    handleChange = (e) => {
        // console.log([e.target.name]);
        const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
        console.log(value);
        this.setState({ [e.target.name]: value });
    }
    render() {
        return (
            <div>
                <form action="">
                    <h2>Full Form Example</h2>

                    Name: <input type="text"  name="name" value={this.state.name} onChange={this.handleChange}/><br /><br />
                    Password: <input type="text"  name="password" value={this.state.password} onChange={this.handleChange}/><br /><br />
                    Address: <input type="text"  name="address" value={this.state.address} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
