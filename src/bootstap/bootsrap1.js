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
    <div className="conatiner">
        <div className="row">
            <div className="col-md-6  offset-md-3">
                <h2 className="mb-4">todo list</h2>
                <div className="mb-3">
                     <input
                     type="text"
                     className="form-control"
                     placeholder="Enter the task"
                     onChange={(e)=>setVlaue(e.target.value)} 
                     /> 
                     <button className="btn btn-primary" onClick={addItem}>add task</button>
                </div>
               
           
            <ul className="list-group mb-4">
                {updated.map((task,index)=>(
                    <li key={index} className="list-group-item  d-flex justify-content-between align-items-center ">
                        {task}
                        <button className=" btn btn-danger" onClick={delete1}> remove</button>
                        </li>
                ))}
            </ul>


            </div>
            </div>
        </div>
    
)

}
export default TodoList