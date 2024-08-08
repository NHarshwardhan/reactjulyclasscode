import React from 'react'
import useUsers from './useUsers'

export default function GetRequest({onEdit}) {
   
   const {users, loading , error} =  useUsers()

   if(loading) return <p>Loading...</p>

   if(error) return <p>Error:{error.message}</p>


  return (
    <div>  

          {
             users && users.map(u=>(               

              <li key={u.id}>{u.name} -  {u.email}
               &nbsp;&nbsp;<button onClick={()=>onEdit(u)} >Edit</button>
                
              </li>

             ))
          }
    </div>
  )
}
