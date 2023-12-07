import React from 'react'
import ChildComponent from './childprop';


const ParentComponent=()=>{
    //   let name="react";
      
  const data={
    message:"hello from parent",
    count:42,
  }

   



      return(
           <ChildComponent {...data}/>

      )
    



}

export default ParentComponent