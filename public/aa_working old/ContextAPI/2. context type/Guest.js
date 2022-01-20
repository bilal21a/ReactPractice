import React, { Component } from 'react';
import {ChangeNumberContext} from './Context'
export default class Guest extends Component {
  static contextType = ChangeNumberContext;
  render() {
      return <div>
        <h1>{this.context.name}</h1>
        <button onClick={this.context.handleState}>Change</button>
    </div>
  }
}
