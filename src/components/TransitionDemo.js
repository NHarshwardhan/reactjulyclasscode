// without useTransition

// import React, { useState } from 'react'

// export default function TransitionDemo() {
   
//   const [filter , setFilter] = useState("")

//   const [items , setItems] = useState(Array.from({length:10000},(_, i)=> `Item ${i+1}`))

//   const [filtereditems , setFiltereditems] = useState(items)
  
//   const handleFilterChange = (event)=>{
//        const newFilter = event.target.value
//        setFilter(newFilter)
//         setFiltereditems(
//               items.filter(item=>item.toLowerCase().includes(newFilter.toLowerCase()))
//         )

//   }

//   return (
//     <div>
//             <input type='text' value={filter} onChange={handleFilterChange} />
//             <ul>
//                  {filtereditems.map(item=><li key={item}>{item}</li>)}
//             </ul>

//     </div>
//   )
// }



// --------------with useTransition--------------


import React, { useState, useTransition } from 'react'

export default function TransitionDemo() {
   
  const [filter , setFilter] = useState("")

  const [items , setItems] = useState(Array.from({length:10000},(_, i)=> `Item ${i+1}`))

  const [filtereditems , setFiltereditems] = useState(items)

  const [isPending , startTransition] = useTransition()
  
  const handleFilterChange = (event)=>{
       const newFilter = event.target.value
       setFilter(newFilter)


       startTransition(()=>{
                setFiltereditems(
                    items.filter(item=>item.toLowerCase().includes(newFilter.toLowerCase()))
            )
       })

  }

  return (
    <div>
            <input type='text' value={filter} onChange={handleFilterChange} />
            {isPending && <div>loading...</div>}
            <ul>
                 {filtereditems.map(item=><li key={item}>{item}</li>)}
            </ul>

    </div>
  )
}
