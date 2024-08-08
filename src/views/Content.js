import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

export default function Content() {
  return (
    <div>
           <Outlet/>

    </div>
  )
}
