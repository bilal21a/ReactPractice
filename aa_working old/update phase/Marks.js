import React, { Component } from 'react'

export default class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mroll:this.props.roll,
        };
    }

    static getDerivedStateFromProps(props,state) {
        console.log("this is marks fun");
        console.log(props);
        if (props.roll != state.mroll) {
            return {mroll: props.roll};
        }else{
            return null;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.mroll < 107) {
            console.log("state is less than 107 -- updated");
            return true;
        }
        else{
            console.log("state is greater than 107 -- not updated");
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevSate){
        console.log("getSnapShotBeforeUpdate -  it just holds old value of state and props");

        //return passed to component did update
        return "Bilal";
    }

    componentDidUpdate(prevProps,prevSate,snapshots){
        console.log("componentDidUpdate -  it runs after snapshots also it");

        console.log(snapshots); //return Bilal

    }

    render() {
        return (
            <div>
                this is roll in mark { this.state.mroll }
            </div>
        )
    }
}
