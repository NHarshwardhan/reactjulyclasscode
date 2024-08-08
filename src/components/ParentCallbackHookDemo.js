// import React, { useState } from 'react'
// import ChildCallbackHookDemo from './ChildCallbackHookDemo'

// export default function ParentCallbackHookDemo() {

//   const [count , setCount] = useState(0)

  
//   // re-created on every render
//   const handleClick = ()=>{
//       console.log('Button Clicked')
//   }

//   return (
//     <div>
//       ParentCallbackHookDemo
//         <br/>

//        <ChildCallbackHookDemo onButtonClick={handleClick}/>
       
//        <button 
//          onClick={()=>setCount(count+1)}>
//           Count : {count}
//        </button>
       
//     </div>
//   )
// }



// --------WithCallback------------------

import React, { useCallback, useState } from 'react'
import ChildCallbackHookDemo from './ChildCallbackHookDemo'

export default function ParentCallbackHookDemo() {

  const [count , setCount] = useState(0)
 
   
  const handleClick =  useCallback(()=>{
        console.log('Button Clicked')
   },[]) 
   // Empty dependency array means the function is only created once
  

  return (
    <div>
      ParentCallbackHookDemo
        <br/>

       <ChildCallbackHookDemo onButtonClick={handleClick}/>
       <button 
         onClick={()=>setCount(count+1)}>
          Count : {count}
       </button>
       
    </div>
  )
}
