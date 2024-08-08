import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate} from 'react-router-dom'

export default function Menu() {
   const [role , setRole] = useState();
  
   const navigate = useNavigate()

   const result = useLocation();


   useEffect(()=>{
        let role = sessionStorage.getItem('role')
        setRole(role)
   },[result.pathname]) 

   const logout = ()=>{
       sessionStorage.removeItem('role')
       alert('logout successfully')
       navigate('/login')
   }
  return (
   <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">KOENIG</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             

                 {
                  role==='admin'? (
                      <>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}  to="/home">Home</NavLink>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/about">About</NavLink>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/todos">Todo</NavLink>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/todos/create">Add Todo</NavLink>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/articles">Articles</NavLink>
                        <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/products">Products</NavLink>
                         &nbsp;&nbsp; 
                        <button onClick={logout} className='btn btn-sm btn-danger'>Logout</button>            
                      </>
                   ):
                   role==='guest'?(
                     <>
                      <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}  to="/home">Home</NavLink>
                      <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/about">About</NavLink>
                       <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/articles">Articles</NavLink>
                       <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/products">Products</NavLink>

                        &nbsp;&nbsp; 
                       <button onClick={logout} className='btn btn-sm btn-danger'>Logout</button>  
                     </>
                   ):
                   (
                    <>
                      <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/login">Login</NavLink>
                      <NavLink className={({isActive})=>(isActive? 'nav-link text-danger':' nav-link text-dark')}   to="/redux">Redux Demo</NavLink>

                    </>
                   )
                }



            </div>
            </div>
    </div>
      </nav> */}


      <nav className="navbar bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white">KOENIG</Link>
          <form className="d-flex" role="search">
              <Link className="btn btn-sm btn-danger" to="/login">Login</Link>

          </form>
        </div>
      </nav>


   </>
  )
}
