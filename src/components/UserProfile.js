import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function UserProfile() {

  const {user} = useContext(AuthContext)


  return (
    <div>
      {
         user?(
            <p>Welcome , {user.name}</p>
         ):(
           <p>Please Log in.</p>
         )
      }

    </div>
  )
}
