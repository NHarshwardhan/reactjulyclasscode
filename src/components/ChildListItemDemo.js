import React, { memo } from 'react'

const  ChildListItemDemo = ({item,onLike})=> {
  console.log(`ListItem ${item.id} re-rendered`)
  return (
    <div>

        <span>{item.name}</span>
        <button onClick={()=>onLike(item.id)}>
            {item.liked?'Unlike':'Like'}
        </button>
    </div>
  )
}

export default memo(ChildListItemDemo)