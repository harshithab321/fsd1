import React, { useEffect, useState } from "react"

function Fetch(){


    const [data,setData]=useState([])
 
       
        const fetchdata=async()=>{
  
            const resp=await fetch("https://jsonplaceholder.typicode.com/users")
            const res=await resp.json()
            setData(res)
            console.log(data)
      
 
}
  
   fetchdata()

   return(
    <>
       {
            data.map((item)=>(
                <p>{item.name}</p>
            ))}
   
 
   </>


   )
}

export default Fetch