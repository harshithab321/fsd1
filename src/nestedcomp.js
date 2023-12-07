import React from "react"

const ParentComponent=()=>{
    const dataToPass="hello from parent"

    return(
        <>
        <ChildComponent data={dataToPass}/>
        </>
    )
}

const ChildComponent=({data})=>{
    
    return(
        <>
        <GrandChildComponent data={data}/>
        </>
    )
}

const GrandChildComponent=({data})=>{
    
    return(
        <>
       <p>data:{data}</p> 
        </>
    )
}

export default ParentComponent