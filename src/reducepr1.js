import React, { useReducer } from 'react'



function reduce(currentState,action){

    switch(action){
    case 'increment':
        return {count:currentState.count+1}
   
    case 'decrement':
    return {count:currentState.count-1}
    
    default:
    return currentState
}


}

function Fin(){

const[state,dispacher]=useReducer(reduce,{count:0})

const increment=()=>{
    dispacher('increment')
}

const decrement=()=>{
    dispacher('decrement')
}




    return(
        <>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>increment</button>
        <span>{state.count}</span>

        </>
    )
}
export default Fin