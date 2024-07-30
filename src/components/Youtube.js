import React, { useState } from 'react'

export default function Youtube() {
    
    // destructure useState()
    const [message, setMessage] = useState('Please subscribe' )
    const [status , setStatus] = useState(false)
    const [count , setCount] = useState(0)
   
    // Event Handler
        // const changeMessage = ()=>{
        //     // update message state
        //     setMessage('Thank you for subscribing..!')
        // }

        // const changeRole = ()=>{
        //        setStatus(!status)
        // }

        // const incrementCount = ()=>{
        //       setCount(count+1)
        // }
  
  return (
    <div>
          {/* <h1>{message}</h1>
          <button onClick={changeMessage}>subscribe</button>

          <h2>{status ?'admin':'guest'}</h2>
          <button onClick={changeRole}>Change status</button>

          <h2>Count : {count}</h2>
          <button onClick={incrementCount}>Increment</button> */}

          {/* -----------------Inline Approach------------------------- */}

          <h1>{message}</h1>
          <button onClick={()=>setMessage('Thank you for subscribing..!')}>subscribe</button>

          <h2>{status ?'admin':'guest'}</h2>
          <button onClick={()=>setStatus(!status)}>Change status</button>

          <h2>Count : {count}</h2>
          <button onClick={()=>setCount(count+1)}>Increment</button>

    </div>
  )
}


