// useState() with object
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {

  const [loginInfo , setLogininfo] = useState({username:'', password:''})
  


  const navigate  = useNavigate()


  // capture user input
  const handleChange = (event)=>{      

       setLogininfo({...loginInfo,[event.target.name]:event.target.value})
       
  }

  const loginProcess = ()=>{
      if(loginInfo.username === 'admin'  && loginInfo.password === 'admin'){
                // connect to db via api and return auth token from an api
                // store token in session storage
                sessionStorage.setItem('role', 'admin')
                navigate('/home');
      }else{
          sessionStorage.setItem('role', 'guest')
          navigate('/home');
      }
  }

  return (
    <div className='container mt-5' >

          <h1 className='mb-3'>Login Panel</h1>
            
            <label>Username</label><br/>
            <input type='text' 
                   name='username' 
                   onChange={handleChange}/><br/>

            <br/><br/>
            <label>Password</label><br/>
            <input type='password' 
                    name='password'
                    onChange={handleChange}/><br/>

            

            <br/>

          
            <br/>         <br/>
            <button className='btn btn-success' onClick={loginProcess}>Login</button>
    </div>
  )
}
