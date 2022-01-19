import React, { Component } from 'react'
import Login from './Login';
import Welcome from './Welcome';

export default class App extends Component {
    state ={
        login_state: true
    }

    do_login =() => {
        console.log("login");
        this.setState({login_state: true});
    }
    do_logout =() => {
        console.log("logout");
        this.setState({login_state: false});
    }
    render() {
        const value = this.state.login_state;
        console.log('value: ', value);

        return (
            <div>
            {(()=> {
                    if (value) {
                        return <Login myState={this.do_logout}/>;
                    }else{
                        return <Welcome myState={this.do_login}/>;
                    }
            })()}
            </div>
        )
    }
}


    // render() {
    //     const value = this.state.login_state;
    //     console.log('value: ', value);

    //     if (value == true) {
    //         return <Login myState={this.do_logout}/>;
    //     }else{
    //         return <Welcome myState={this.do_login}/>;
    //     }
    // }