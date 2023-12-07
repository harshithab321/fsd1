import React, { useCallback, useState } from 'react'

function CallBack(){
const [state,setCount]=useState(0)

const increment=useCallback(()=>{
    setCount(state+1)
})





return(
    <>
    <button onClick={increment}>increment</button>
    <child />
    {state}
    </>
)
}
export default CallBack