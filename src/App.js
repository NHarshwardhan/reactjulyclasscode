import React from 'react'
import Greet from './components/Greet'

export default function App() {
   
   let person = {
       firstname:'Mike',
       lastname:'Tyson'
   }


   let users = [
      { id: 101, name: 'Peter', age:34},
      { id: 102, name: 'John', age:34},
      { id: 103, name: 'Kerry', age:34},
   ]

  return (
      <>
        {/* <Greet fname="Peter" lname="Parker" age={24}/>  
        <Greet fname="Rose" lname="Dawson" age={25}/>  
        <Greet fname="Kerry" lname="Parera" age={26}/>   */}


        {/* <Greet personInfo = {person}/> */}

        <Greet userInfo = {users}/>
      </>
  )
}
