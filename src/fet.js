import React, { useEffect, useState } from "react";

const Fun=()=>{
              
    const[data,setData]=useState([])
    useEffect(()=>{
            console.log('users loging more')
             const func=async()=>{
                       try{
                             const respo=await fetch("https://jsonplaceholder.typicode.com/users")
                             const result=await respo.json()
                             setData(result)

                       }
                      catch(error)
                      {
                          console.log("error")
                      }


             }
             func()

    },[])
return(
    <>
       {
            data.map((item)=>(
                <p>{item.name}</p>
            ))}
   
 
   </>


   )
}

export default Fun





