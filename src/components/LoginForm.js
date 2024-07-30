// useState() with object
import React, { useState } from 'react'

export default function LoginForm() {

  const [loginInfo , setLogininfo] = useState({username:'', password:''})

  // capture user input
  const handleChange = (event)=>{      

       setLogininfo({...loginInfo,[event.target.name]:event.target.value})
       
  }

  const loginProcess = ()=>{
      console.log(loginInfo)
  }

  return (
    <div style={{marginLeft: '10px'}}>

         {/* <h1>Login Panel</h1>

         <label>Username</label><br/>
         <input type='text' 
                name='username' 
                onChange={(event)=>setLogininfo({...loginInfo,username:event.target.value})}/><br/>

         <br/><br/>
         <label>Password</label><br/>
         <input type='password' 
                name='password'
                onChange={(event)=>setLogininfo({...loginInfo,password:event.target.value})}/><br/>

         <br/>

          {JSON.stringify(loginInfo)}
          <br/>         <br/>
         <button onClick={loginProcess}>Login</button> */}


         {/* ------------Capture user input thorugh a function handleChange-------- */}

         <h1>Login Panel</h1>

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

            {JSON.stringify(loginInfo)}
            <br/>         <br/>
            <button onClick={loginProcess}>Login</button>
    </div>
  )
}
