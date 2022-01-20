import React, { Component } from 'react'
import './App.css'
import Custom from './Custom';
export default class App extends Component {
    render() {
        const cond = false;
        return (
            <div>
                <h1 className="headings">Hello</h1>
                <p className={cond ? 'body1' : 'body2'}>hello its body</p>
                <Custom stylename={cond ? "body1": "body2"}/>
            </div>
        )
    }
}
