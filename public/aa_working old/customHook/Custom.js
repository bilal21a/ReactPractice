import * as React from 'react';
import { useState } from 'react';

function useCustomFunc(){
    //usestate
    const[counter,setCounter] =useState(1);

    //handler function
    const handleCounter =()=>{
        setCounter(counter+1);
    };
    return {
        counter,
        handleCounter
    }
}

export default useCustomFunc