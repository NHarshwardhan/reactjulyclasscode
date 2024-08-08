import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Articles() {
  return (
    <div style={{marginLeft:'10px'}}>
        <br/><br/>
        <h3>List of Articles : -</h3>
         <Link to='article1'>Article 1</Link>&nbsp;&nbsp;&nbsp;
         <Link to='article2'>Article 2</Link>
         
          {/* placeholder:  Used to render child or nested route component */}
         <Outlet/>
    </div>
  )
}
