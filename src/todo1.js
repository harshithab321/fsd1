import React, { useState } from "react";

function TodoList(){
    const [updated,Set]=useState([])
    const [value,setVlaue]=useState('')
     
    const addItem=()=>{

      if(value.trim()!==''){
        Set([...updated,value])
        setVlaue('')
      }
    }

    const delete1=(index)=>{
            const state=[...updated]
           state.splice(index,1)
          console.log(state)
           Set(state)  
    }
    
return (

        <>  
        <h1>TODO List App</h1> 
          <input type="text" placeholder="enter the name" value={value} onChange={function(event){setVlaue(event.target.value)}}/>
             
                
                <button onClick={addItem}>add item</button>
                

                <ul>
                {
                    updated.map((item,index)=>(<ul>{item}
                     <button onClick={()=>{delete1(index)}}>delete</button>
                    </ul>))
                }
          </ul>
        </>
  )

}
export default TodoList