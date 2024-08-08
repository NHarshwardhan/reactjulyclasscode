import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function TodoDetails() {

  const [todo , setTodo] = useState({})  

  // Obtain route parameter
    //   const {id} = useParams()

  // Obtain data from state props
   const {state:{uid}} = useLocation()



  useEffect(()=>fetchTodoById(),[])

  const fetchTodoById = ()=>{

       axios.get(`http://localhost:1234/todos/${uid}`)
             .then(response=>setTodo(response.data))
             .catch(error => console.log(error))
  }

  
  return (
    <div className='container'>
           
           <Link className='btn btn-primary btn-sm mt-3' to="/todos" >Back</Link> 


           <table className='table table-bordered  mt-3'>
               <tbody>
                   <tr>
                      <th> Id </th>
                      <td>{todo.id}</td>
                   </tr>
                   <tr>
                      <th> Title </th>
                      <td>{todo.title}</td>
                   </tr>
                   <tr>
                      <th> Completed </th>
                      <td>
                          <input type='checkbox' checked={todo.completed}/>
                      </td>
                   </tr>
                   <tr>
                      <th> User ID </th>
                      <td>{todo.userId}</td>
                   </tr>
                  
               </tbody>
           </table>
    </div>
  )
}
