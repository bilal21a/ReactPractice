import React, { Component } from 'react'
import Marks from './Marks';
export default class Student extends Component {
    constructor (){
        super();
        this.state = {
            roll: 100
        };
    }
    render() {
        return (
            <div>
                <Marks roll={this.state.roll}/>
                <button onClick={this.get_marks}>Get marks</button>
            </div>
        )
    }

    get_marks=() => {
        console.log("btn click");
        this.setState({roll: this.state.roll+2})
    }
}
