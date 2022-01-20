import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: "",
        password: "",
        address: "",
    }

    handleChange = (e) => {
        const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleSubmit = e => {
        //on submit form it shows the value of input field
        console.log(e.target[1].value);
        //this will stops the submit default functionality
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h2>Full Form Example</h2>

                    Name: <input type="text"  name="name" value={this.state.name} onChange={this.handleChange}/><br /><br />
                    Password: <input type="text"  name="password" value={this.state.password} onChange={this.handleChange}/><br /><br />
                    Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                    
                    <input type="submit" name="submit" id="submit" value="Save" />
                </form>
            </div>
        )
    }
}
