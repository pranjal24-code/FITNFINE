import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    
    const [action , setaction] = useState("Login");

  return (
    <div className='container'>
        <h1 className='main-heading'>Welcome to our GYM</h1>
        <div className='login'>
            <h1>{action}</h1>
            <div className='login-inps'>
                {action==="Login"? <div></div>:
                <div className='login-inp'>
                    <input type="text" placeholder='name' />
                </div>}

                <div className='login-inp' >
                    <input type="text" placeholder='email' />
                </div>
                <div className='login-inp'>
                    <input type="text" placeholder='password' />
                </div>
                
            </div>
            <div className='context'>
                <p>New user? 
                    <a href="sign-up">Sign-up</a>
                </p>
                <p className='forgot'>Forgot password</p>
            </div>
            <div className='btn'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Login")} }> Login </div>
                <div className={action==="Sign-up"?"submit gray":"submit"} onClick={()=>{setaction("Sign-up")}} >Sign-up </div>
            </div>

        </div>
      
    </div>
  )
}


export default Login
