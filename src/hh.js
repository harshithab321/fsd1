
import React, {useState,useEffect} from "react"

function F(){
    
const[Data,setData]=useState([])


    const fetchData=async()=>{
        try{
            const res=await fetch(' https://jsonplaceholder.typicode.com/users')
            const result=await res.json();
            console.log(result)
            setData(result)
        }
    
    catch(error){
       console.error("error",error)
    }
}
fetchData()


    



return(
     <>
      
          {
            Data.map((item)=>(
                <p key={item.id}>{item.name}</p>
            ))}
             
        

</>
)
        }

export default F