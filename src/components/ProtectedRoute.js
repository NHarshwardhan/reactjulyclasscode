import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// export default function ProtectedRoute({Component}) { //component =  Todo
  
//   const navigate = useNavigate();

//   useEffect(()=>{
//        if(!sessionStorage.getItem('role')){
//                navigate('/login')         
//        }

//   },[])  
//   return (
//      <Component />
//   )
// }


// -------------------------
export default function ProtectedRoute() { 
  
    const navigate = useNavigate();
  
    useEffect(()=>{
         if(!sessionStorage.getItem('role')){
                 navigate('/login')         
         }
  
    },[])  
    return (
       <Outlet />
    )
  }
  