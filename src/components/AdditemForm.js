// child

import React from 'react'

export default function AdditemForm({onAddItem}) {

  const handleSubmit = (event)=>{
        event.preventDefault();
        
        const itemData = {
             name: event.target.name.value,
             price: event.target.price.value
        }
        onAddItem(itemData)
  }  
  return (
    <div>
         <pre>
            <form onSubmit={handleSubmit}>
                <label>Item Name:</label>
                <input type='text' name="name"/>

                <label>Price:</label>
                <input type="number" name="price"/>
                
                <button type='submit'>Add item</button>
            </form>
        </pre>
    </div>
  )
}
