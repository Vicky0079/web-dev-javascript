import React, { useState } from "react"


const UseStateOne = () => {
    const [count,setCount] = useState(0)
    console.log("count",count);//0
    
    function increase(){
        // count = count+1
        setCount (count+1);
    }
 function decrease(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }    
    return(
        <>
        <div>UseStateOne</div>
        <h1>Count:{count}</h1>
        <button onClick={increase}>+</button>
        <br/>
        <button onClick={decrease}>-</button>
        <br/>
        <button onClick={reset}>Reset</button>
        </>
    )
}


export default UseStateOne;