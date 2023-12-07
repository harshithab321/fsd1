import react, { useState } from 'react'


function Fun(){
   
    const [data,setData]=useState([])
    const[newData,setNewData]=useState('')


    const addTask=()=>{
        if(newData.trim()!==''){
        setData([...data,newData])
        setNewData('')
        }
    }


    const removeData=(index)=>{
        const updated=[...data]
         updated.splice(index,1)
         setData(updated)
        }

  return(
    <>
       
            <h1>todo</h1>
            <input type="text" placeholder='enetr the task' value={newData} onChange={(e)=>setNewData(e.target.value)}/>
            <button onClick={addTask}>add task</button>
        
        <ul >
     {
        data.map((ele,index)=>(
                  <li key={index}>
                    {ele}
                    <button onClick={()=>removeData(index)}>remove</button>
                  </li>
            ))
               

  }
        </ul>
        </>



  )

}

export default Fun