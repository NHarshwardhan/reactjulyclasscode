import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function TodoEdit() {

    const [todoForm , setTodoForm] = useState()  

    const navigate =  useNavigate()  // used to programmatically navigation one view to another view
   
    // Capture the data coming from Todo Component for edit
    const location = useLocation()
    
    useEffect(()=>{
            setTodoForm(location.state?.record)
    },[])
  
    const updateRecord = ()=>{
        // console.log(todoForm)
  
         axios.put(
             `http://localhost:1234/todos/${todoForm.id}`,  
              todoForm,             
              { headers: { "Content-Type":"application/json"}}
          )             
             .then(response=>{
                  alert('record updated successfully')
                  navigate('/todos')
  
             })
             .catch(err=> console.log(err))
     
    }  

    const deleteRecord = ()=>{
         if(window.confirm('Are You Sure to delete ?')){
            axios.delete(`http://localhost:1234/todos/${todoForm.id}`)
                .then(response=>{
                    alert('record delete successfully')
                    navigate('/todos')

            })
            .catch(err=> console.log(err))
         }
    }
  
    return (
      <div className='container mt-3'>
  
             <h3>Update Todo Record : {todoForm?.id} </h3>
             <br/>
             <label>Title</label>
             <input type='text' value={todoForm?.title} className='form-control' onChange={(e)=>setTodoForm({...todoForm,title:e.target.value})} />
              
              <br/>
             <label>Completed</label> &nbsp; &nbsp;
             <input type='checkbox' checked={todoForm?.completed} onChange={(e)=>setTodoForm({...todoForm,completed:e.target.checked})} />
  
             <br/>  <br/>  <br/>
             <button onClick={updateRecord} className='btn btn-primary btn-sm'>update</button>
              &nbsp;&nbsp; &nbsp;&nbsp;
             <button onClick={deleteRecord} className='btn btn-danger btn-sm'>Delete</button>
  
      </div>
    )
}
