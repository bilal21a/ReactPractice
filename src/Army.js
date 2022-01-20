import * as React from 'react';
import { Component } from 'react';

const Armay = (Men,multiply=1) => {
    class newMan extends Component{
           state = {
        shots:0
    }
    handleMouseHover = () => {
        this.setState({shots:this.state.shots+ multiply})
    }
        render() {
            return (
                <Men
                    hocgun="AKM"
                    hocshots={this.state.shots}
                    handleShots={this.handleMouseHover}
                    {...this.props}
                />
            );
        }
    }
    return newMan;
}
export default Armay;