import React, { memo } from 'react'

// export default function ChildCallbackHookDemo({onButtonClick}) {
  
//     console.log('Child Component re-rendered')
//     return (
//     <div>
        
//         ChildCallbackHookDemo

//       <button onClick={onButtonClick}>Click Me</button>    
//     </div>
//   )
// }


// ---------------------

const ChildCallbackHookDemo = ({onButtonClick}) =>{
  
    console.log('Child Component re-rendered')
    return (
    <div>
        
        ChildCallbackHookDemo

      <button onClick={onButtonClick}>Click Me</button>    
    </div>
  )
}

export default memo(ChildCallbackHookDemo)
