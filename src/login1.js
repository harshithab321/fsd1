import React from 'react'
import './index.css'
const Login=()=>{
 






return (


 
    <form className="container">

    <div className="inputbox">
    <h1>Login Page</h1>
    <label for="username"><b>Enter Username</b></label>
    <input type="text" placeholder="enter your name" id="username"/>	
    
    <label for="password"> <b>Enter Password</b></label>
    <input type="password" placeholder="enter your password" id="password"/>
  


  
 
 <label>
  <input className='check' type="checkbox"  name="remember"/> Remember me 
  <span><a href='/'>?Forgot password</a></span>
</label>


<button className=" button" type="submit">Login</button>
   
</div>

    </form>
)}
export default Login

<h1>users</h1>
        {Data.length>0?(
            <h1>
          {
            Data.map((item)=>(
                <p key={item.id}>{item.name}</p>
            ))}
             </h1>)
            :
            (
            <p>nothing</p>
           
        )
            }