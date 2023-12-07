import React from 'react';
import  './login.css'
import ReactDOM from 'react-dom/client';


const App=()=>{





return(
    
    <form class="container">

    <div class="inputbox">
    <h1>login</h1>
    <label for="username">username</label>
    <input type="text" placeholder="enter your name" id="username"/>	
    
    <label for="password">password</label>
    <input type="password" placeholder="enter your password" id="password"/>
  
   
   <label>
    <input type="checkbox" checked="checked" name="remember"/> Remember me
  
  
    </label>
   </div>
  </form>

   )
}

export default App;