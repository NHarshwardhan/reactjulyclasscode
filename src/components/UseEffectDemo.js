import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

  const [users , setUsers] = useState([])  
  const [loading , setLoading] = useState(true)
  const [fetchCount , setFetchCount] = useState(0)

  useEffect(()=>{

    console.log('component mounted...')
    
    //simulate fetching data with a delay
    const timer = setTimeout(()=>{
      const api_users = [
          { id: 1 , name: 'Peter Parker'},
          { id: 2 , name: 'Rose Dawson'},
          { id: 3 , name: 'Rick'}
      ]
      
      //update user state with api data
    setUsers(api_users)
    setLoading(false)
    setFetchCount(fetchCount+1)

    },2000)
    console.log(`value of dependency changes fecthCount = ${fetchCount}`)
   
    //cleanup function : it triggeres in below situation
    /*
             - Navigtate from current component to another component
             - whenever we changes the dependency , causing the cleanup function to run before
                the effect re-runs
    */
    return ()=>{
          console.log('component unmounted..')
        
        
          clearTimeout(timer)
    }

  },[])  

 
   if(loading){
        return <div>loading...</div>
   }

  return (
    <div>
          <h1>Users</h1>
           <ul>
               {
                 users.map(u=>(
                     <li key={u.id}>{u.name}</li>
                 ))
               }
           </ul>

    </div>
  )
}
