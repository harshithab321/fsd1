import react, { useMemo, useState } from 'react'

function UseMemoFun(){

const [state,setCounter]=useState(0)
const[statetwo,setCountTwo]=useState(0)




const decrement=()=>{
    console.log("state1")
    setCounter(state+1)
}




const increment=()=>{
    console.log("state2")
    setCountTwo(statetwo+1)
}

const even=useMemo(()=>{
    console.log("even")
    let i=0
    while(i<900000)
    i++
return state%2===0
},[state])

return(
    <>
    <button onClick={decrement}>increment</button>
    {state}
    <span>{even?"even":"false"}</span>
    <button onClick={increment}>decrement</button>
    
    </>
)


}

export default UseMemoFun