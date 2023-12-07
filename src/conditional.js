import React,{useEffect,useState} from "react";

function ConditionalRendering(){
    const[isVisible,setIsVisible]=useState(false);



    useEffect(()=>{
        console.log("Component is",isVisible? "visible" : "hidden")
    },[isVisible])


return (


    <div>
        <button onClick={()=>setIsVisible(!isVisible)}>togglevisible
        </button>
        {isVisible && <p> this Content is Conditionaly rendering</p>}
    </div>
)
}

export default  ConditionalRendering;