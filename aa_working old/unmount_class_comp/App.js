import React, { Component } from 'react'

export default class App extends Component {
    //on mounting
    componentDidMount() {
        console.log("App Mounted");
    }

    //On unmount
    componentWillUnmount() {
        console.log("App Unmounted");
    }

    // Render the component
    render() {
        console.log("App REnder");
        return (
            <div>
                hi
            </div>
        )
    }
}
