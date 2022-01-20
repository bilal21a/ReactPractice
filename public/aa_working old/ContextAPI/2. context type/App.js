import React, { Component } from 'react';
import User from './User';
import {Provider} from './Context'
export default class App extends Component {
    state = {
        name:123
    }
    handleFunc = () => {
        this.setState({name:this.state.name+1});
    }
    render() {
        const arrData = {
            name: this.state.name, 
            handleState: this.handleFunc
      };

      return <div>
        <Provider value={arrData}>
            <User />
        </Provider>
          
    </div>;
  }
}

