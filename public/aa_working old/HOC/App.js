import React, { Component } from 'react';
import Ali from './Ali';
import Bilal from './Bilal';

export default class App extends Component {
  render() {
      return <div>
        <Bilal camp="alpha"/>
        <Ali camp="beta"/>
    </div>;
  }
}
