import React, { useEffect ,useState} from "react";

function MyComponent(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
          const intervalid=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
          },1000)
    
    return ()=>{
        clearInterval(intervalid)
    }
    })
    return <div>{count} second elapsed</div>
}


