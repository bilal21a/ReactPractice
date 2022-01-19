import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users: [
            {id: '101',name: 'John',password: '123'},
            {id: '102',name: 'mac',password: '2345'},
            {id: '003',name: 'book',password: '167'}
        ],
    }
    render() {
        const arr = this.state.users;
        console.log('arr: ', arr);
        const newlist = arr.map((num,key) => {
            return <li key={num.id}>
                <h1>{num.id}</h1>
                <h3>{num.name}</h3>
                <h5>{num.password}</h5>
                <br />
                </li>;
        })
        return (
            <div>
                <ul>
                    { newlist }
                </ul>
            </div>
        )
    }
}
