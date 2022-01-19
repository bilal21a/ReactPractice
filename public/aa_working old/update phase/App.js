import React, { Component } from 'react'


// const App =(props)=>{
//     return <>
//     <h1>{props.children}</h1>
//     {/* <button onClick={click}>click me</button> */}
//     <a href="https://www.google.com" onClick={preventDefault}>stop Google</a>
//     </>
// }

// const preventDefault =(e)=>{
// e.preventDefault();
// console.log("not goingb");

// }

// ------------Function------------------------


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'app',
            class: 'active'
        };
    }

    render(){
        return <>
        <h1>name: {this.state.name}</h1>
        <h1>Class: {this.state.class}</h1>
       
         <button onClick={e=>{
            this.show_console(this.state.name,e)
        }}>Show Console</button> 
        
        <button onClick={this.show_console.bind(this.e,this.state.name)}>Show Console</button>
        </> 
    }

    show_console =(name,e)=> {
    //  console.log(e);
     
        this.setState({
            class: name
            
        });
    }
}

export default App;