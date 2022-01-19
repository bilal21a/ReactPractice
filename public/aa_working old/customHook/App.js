import React from 'react'
import useCustomFunc from './Custom';

export default function App() {

    // you can use many as many as you want
    const data = useCustomFunc();
    const data2 =useCustomFunc();


    return (
        <>
        <div>
            <h1>{data.counter}</h1>
            <button onClick={data.handleCounter}>click to increase</button>
        </div>
        <div>
            <h1>{data2.counter}</h1>
            <button onClick={data2.handleCounter}>click to increase</button>
        </div>
        </>
    )
}
