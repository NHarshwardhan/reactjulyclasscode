import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function ComponentC() {

  const contextValue = useContext(MyContext)
  
  
  return (
    <div>ComponentC - {contextValue}</div>
  )
}
