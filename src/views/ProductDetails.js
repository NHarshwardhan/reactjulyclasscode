import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function ProductDetails() {
  const [product , setProduct] = useState({})

  const location = useLocation()
  
  useEffect(()=>{
      setProduct(location.state?.productInfo)
  },[])
  return (
    <div className='container mt-5'>
          <img src={product?.thumbnail} width={200} height={200} alt=''/>
           <br/><br/>
           <Link className='btn btn-primary btn-sm' to='specification' state={{productSpec:product}}>Specification</Link>&nbsp;&nbsp;&nbsp;
           <Link className='btn btn-primary btn-sm' to='review' state={{productSpec:product?.review}}>Review</Link>&nbsp;&nbsp;&nbsp;
           <Link className='btn btn-primary btn-sm' to='dimension'state={{productSpec:product?.dimension}}>Dimension</Link>
            <Outlet/>
    </div>
  )
}
