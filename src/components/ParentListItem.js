import React, { useCallback, useMemo, useState } from 'react'
import ChildListItemDemo from './ChildListItemDemo'

export default function ParentListItem() {

  const [items, setItems] = useState([
      {id: 1 , name: 'Item 1', liked: false},
      {id: 2 , name: 'Item 2', liked: false},
      {id: 3 , name: 'Item 3', liked: false}

  ])  

  const toggleLike = useCallback((id)=>{
      
    setItems(
        items.map(item=>item.id === id ? {...item,liked:!item.liked}:item)
    )
  },[])


  //useMemo()

  return (
    <div>
        {
            items.map(item=>(
                 <ChildListItemDemo
                       key={item.id}
                       item = {item}
                       onLike ={toggleLike}
                    
                 />
            ))
        }

    </div>
  )
}
