import React, { Component } from 'react'

export default class Custom extends Component {
    render() {
        // console.log(this.props.stylename);
        return (
            <div>
                <h3 className={ this.props.stylename}>bila </h3>
            </div>
        )
    }
}
