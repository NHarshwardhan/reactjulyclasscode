import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ManagerDB() {
  return (
    <div className='container mt-3'>
    <div className='row'>
        <div className='offset-md-21col-md-9'>
        <nav className="nav nav-pills nav-fill">
      
        <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="allApp">All Application</NavLink>
        <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="pendingApp">Pending Application</NavLink>
        <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="approvedApp">Approved Application</NavLink>
        <NavLink className={({isActive})=>(isActive? 'nav-link bg-primary text-white':' nav-link ')}   to="rejectedApp">Rejected Application</NavLink>

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
