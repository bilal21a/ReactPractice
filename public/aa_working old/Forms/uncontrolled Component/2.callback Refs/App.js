import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.name_ref = null;

        //this is callback ref -- we assign name_ref a DOM Element
        this.callBackName = e => {
            this.name_ref = e;
        };

    }
    componentDidMount() {
        // this will make your cursor inside this input when component mount
        this.name_ref.focus();
    }

  render() {
      return <div>
                    
          <form action="">
              Name<input type="text" ref={this.callBackName} />
              <input type="submit" value="Save and show" />
          </form>
    </div>;
  }
}
