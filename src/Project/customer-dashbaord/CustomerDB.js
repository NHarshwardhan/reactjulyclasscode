import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function CustomerDB() {
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='offset-md-3 col-md-5'>
            <nav className="nav nav-pills nav-fill">
          
            <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="allLoans">All Loans</NavLink>
            <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="appliedLoans">Applied Loans</NavLink>

            </nav>
            </div>
        </div>
        <div className='row mt-5'>
              <div className='col-md-12'>
                     <Outlet/>

              </div>
        </div>
    </div>
  )
}
