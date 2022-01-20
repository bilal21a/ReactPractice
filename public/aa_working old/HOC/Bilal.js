import React, { Component } from 'react';
import Armay from './Army';
class Bilal extends Component {
 
  render() {
      return <div>
          <h1>{this.props.camp}</h1>
          <p onMouseOver={this.props.handleShots}>Bilal {this.props.hocgun} Shots: { this.props.hocshots }</p>
    </div>;
  }
}

export default Armay(Bilal);
