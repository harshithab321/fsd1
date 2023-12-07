import React from 'react'


const ChildComponent=(props)=>{

 props.message='ki'
return(
     <p>hello {props.message}</p>
)
}

export default ChildComponent