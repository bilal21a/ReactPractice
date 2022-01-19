import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
// let el = 'hi mon';

// class App extends Component {
//     render() {
//         return <>
//         <h1>{this.props.name}</h1>
//         <p>its not p</p>
//         </>;
//     }
// }

// const Student =(props) => {
//     console.log('props: ', props);

//         return <>
//         <h1>nothing</h1>
//         <p>test</p>
//         </>
// }
// const App =(props) => {
//     let el = <span>Hi mon {Student(props)}</span>
//     return el
// }


// const NewApp =() =>{
//     return <h1>hilo</h1>
// }

const App=(props)=>{
    return <span>hilo mon {props.name} {props.children}</span>
}

App.propTypes = {
    name: PropTypes.string.isRequired
}
App.defaultProps = {
    name:"BILAL"
}

export default App;