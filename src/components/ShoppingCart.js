// Parent

import React from 'react'
import AdditemForm from './AdditemForm'

export default function ShoppingCart() {

  const handleAddItem = (item)=>{
    console.log('Item added', item)
  }  

  return (
    <div>
         <h1>Shopping Cart</h1>
         <AdditemForm onAddItem={handleAddItem}/>
    </div>
  )
}



