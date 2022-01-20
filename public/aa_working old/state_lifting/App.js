import React, { Component } from 'react';
import Guest from './Guest';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'this value is passing to Guest as a props'
        }
    }
  render() {
      return <div>
        <Guest value={this.state.value}/>
    </div>;
  }
}
