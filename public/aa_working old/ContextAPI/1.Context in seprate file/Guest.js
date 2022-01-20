import React, { Component } from 'react';
import {Consumer} from './Context'
export default class Guest extends Component {
  render() {
      return <div>
          <Consumer>
              {data =>
                  <>
                  <h1>{data.name}</h1>
                  <button onClick={data.handleState}>Change</button>
                  </>
              }
        </Consumer>
        
    </div>;
  }
}
