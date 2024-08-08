// Parent

import React, { useContext } from 'react'
import AdditemForm from './AdditemForm'
import { MyContext } from '../App'

export default function ShoppingCart() {

  // consume context value
  const contextValue = useContext(MyContext)
   
  const handleAddItem = (item)=>{
    console.log('Item added', item)
  }  

  return (
    <div>
         <h1>{contextValue}</h1>
         <AdditemForm onAddItem={handleAddItem}/>
    </div>
  )
}



