import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddTodo() {

  const [todoForm , setTodoForm] = useState({title: '', completed: false})  

  const navigate =  useNavigate()  // used to programmatically navigation one view to another view


  const addRecord = ()=>{

       axios.post(
           'http://localhost:1234/todos',

            todoForm,
           
            { headers: { "Content-Type":"application/json"}}
        )
           
           .then(response=>{
                alert('record created successfully')
                navigate('/todos')

           })
           .catch(err=> console.log(err))
   
  }  

  return (
    <div className='container mt-3'>

           <h3>Create New Todo</h3>
           <br/>
           <label>Title</label>
           <input type='text' className='form-control' onChange={(e)=>setTodoForm({...todoForm,title:e.target.value})} />
            
            <br/>
           <label>Completed</label> &nbsp; &nbsp;
           <input type='checkbox' onChange={(e)=>setTodoForm({...todoForm,completed:e.target.checked})} />

           <br/>  <br/>  <br/>
           <button onClick={addRecord} className='btn btn-success btn-sm'>Add</button>

    </div>
  )
}
