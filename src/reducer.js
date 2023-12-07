import React,{ useReducer } from 'react'




function reduce(currentstate,action){
      switch(action){
        case "increment":
            return {count:currentstate.count+1}
       
        case "decrement":
            return {count:currentstate.count-1}
       
       default: 
       return currentstate

      }
}

function Fun(){

const[state,dispacther]=useReducer(reduce,{count:0})


    
const increment=()=>{dispacther('increment')}
const decrement=()=>{dispacther('decrement')}



    return(
        <>
         <span >{state.count}</span>
        <button onClick={increment}>countIncrement</button>
       
        <button onClick={decrement}>countdecrement</button>
        </>


    )
}

export default Fun