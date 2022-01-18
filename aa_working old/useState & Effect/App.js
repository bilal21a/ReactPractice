import React, { useState, useEffect } from 'react'

export default function App() {
    var [increment,setIncrement] = useState(0);
    var [decrement,setDecrement] = useState(50);

    useEffect(()=>{                 //use anonymous function
        console.log("i am effect");
    },[increment])// now effect will only moniter increment


    //changing state in an event
    const handleIncrement=()=>{
        setIncrement(increment+1)
    }
    const handleDecrement=()=>{
        setDecrement(decrement-1)
    }

    return (
        <>
        <h1>{increment}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1>{decrement}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}
