import React, { Component } from 'react';
import Army from './Army'
class Ali extends Component {
    state = {
         multiply:20
    }
    
  render() {
      return <div>
         <h1>{this.props.camp}</h1>
          <p onMouseOver={this.props.handleShots}>Bilal {this.props.hocgun} Shots: { this.props.hocshots }</p>
      </div>;

  }
}
export default Army(Ali,20)