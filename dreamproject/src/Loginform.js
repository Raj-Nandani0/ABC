import React, { useState } from 'react'

function Loginform() {
    const[login,setlogin]=useState(true);
  return (
    <>
    <button onClick={()=>setlogin(true)}>Login</button>
    <button onClick={()=>setlogin(false)}>Signup</button>
     {login ?
        <>
           <h1> LoginForm</h1>
           <input type ="text" placeholder='Email Address'/>
           <input type="Password" placeholder=' Password'/>
           <a href='#'>Forget password</a>
           <button>Login</button>
           <p>Not a member?</p> <a href='#'onClick={()=>setlogin(false)}>Signup now</a>
        </>: <> 
           <h1> Signup Form</h1>
           <input type="text" placeholder='Email'/>
           <input type="password" placeholder='Password'/>
           <input type="password" placeholder='Confirm password'/>
            <button>Signup</button>
        </>}
        </>
  )
}

export default Loginform


