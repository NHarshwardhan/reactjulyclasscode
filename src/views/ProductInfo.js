import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductInfo({name}) {
  
  const [data, setData] = useState()
  
  const location = useLocation()
 
  useEffect(()=>{
      setData(location.state.productSpec)
  },[])


  
  return (
    <div>
           
         
    </div>
  )
}
