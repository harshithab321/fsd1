
import React ,{useEffect, useState} from "react";

const Counter=()=>{
   let [count,setCount]=useState(0)

   useEffect(()=>{
    console.log("component rendered")
 },[])



function increment(){
   setCount(count+1)
}

function decrement(){
    setCount(count-1)
 }


    return(
        <>
        <button onClick={increment}>+</button>
        <p>count:{count}</p>
        <button onClick={ decrement}>-</button>
        
        </>
    )

}

export default Counter;