import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function LoginButton() {

  const {login ,logout , user} = useContext(AuthContext)

  const handleLogin = ()=> login({name:'Rose Dawson'})

  return (
    <div>
       
       <button onClick={user ? logout : handleLogin} >
           { user ? 'Logout' :'Login'}
       </button>

    </div>
  )
}
