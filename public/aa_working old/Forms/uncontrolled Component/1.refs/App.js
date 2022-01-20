import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'awd'
        };

        this.name_ref = React.createRef();
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.name_ref.current.value);
        this.setState({value:this.name_ref.current.value});
    }

  render() {
      return <div>
          <h2>you Entered: {this.state.value}</h2>
          
          <form action="" onSubmit={this.handleSubmit}>
              Name<input type="text" ref={this.name_ref} /> <br />
              <input type="submit" value="Save and show" />
          </form>
    </div>;
  }
}
