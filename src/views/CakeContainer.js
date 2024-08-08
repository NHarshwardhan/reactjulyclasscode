import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { additems, buyCake, buyCandle } from '../redux/cakeSlice'

export default function CakeContainer() {
  
  const [qty , setQty] = useState()
  const [userInput , setUserInput] = useState()

   // access the redux state
  const reduxItems = useSelector((state)=>state)

  // access the redux action and dispatch the same 
  const dispatch = useDispatch()
    
  return (
    <div className='container mt-5'>
        <div className='row'>
        <div className='col-md-4'>
        <h3>Number of Cakes : {reduxItems.cake.numberofCakes}</h3>
        <input type='number' placeholder='Enter Quantity' onChange={(e)=>setQty(Number(e.target.value))}/>
        
        <button className='btn btn-sm btn-primary' onClick={()=>dispatch(buyCake(qty))} >Buy Cake</button>
        
        </div>

        <div className='col-md-4'>
            <h3>Number of Candles : {reduxItems.cake.numberOfCandles}</h3>
            <input type='number'  placeholder='Enter Quantity' onChange={(e)=>setQty(Number(e.target.value))}/>
            
            <button className='btn btn-sm btn-success' onClick={()=>dispatch(buyCandle(qty))} >Buy Candle</button>
        
        </div>
        </div>

         <div className='row mt-4'>
            <div className='col-md-6 mt-5'>
                
                 <input onChange={(e)=>setUserInput(e.target.value)}  type='text' placeholder='enter task'/>
                 <button onClick={()=>dispatch(additems({task:userInput}))} className='btn btn-sm btn-danger '>Add Task</button>
             

            </div>

         </div>
         <div className='row mt-4'>
            <div className='col-md-6 mt-5'>
                
                {
                    reduxItems.cake.tasks.map((t, index)=>(
                        <p key={index}>{index+1}. {t.task}</p>
                    ))
                }
            </div>

         </div>
      
    </div>
  )
}


