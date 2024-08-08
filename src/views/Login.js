import React, { useState } from 'react'

export default function Login() {

  const [loginData , setLoginData] = useState({username:'', password:''})

   
  const handleChange = (event)=>{
      setLoginData({...loginData,[event.target.name]:event.target.value})
  }

  return (
    <div>
          <input
               type='text'
               name="username"
               onChange={handleChange}
               placeholder='username'

          />

         <input
               type='password'
               name="password"
               onChange={handleChange}
               placeholder='password'
          />

              
    </div>
  )
}
