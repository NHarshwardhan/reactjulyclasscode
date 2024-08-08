import React from 'react'
import useForm from './useForm'

export default function FormComponent() {
 
  const initialValue = {username:'', email:''}

  const handleSubmit = (formValues)=>{

    console.log('Form Submitted with values', formValues)
  }   


 const {values,errors,handleChange,handleSubmit:handleFormSubmit}
                                           =  useForm(initialValue,handleSubmit)

  return (
    <form onSubmit={handleFormSubmit}>
         <div>
            <label>Username:
                <input 
                        type='text' 
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        
                        />   
            </label>
            {errors.username && <span>{errors.username}</span>}
         </div>

         <div>
            <label>Email:
                <input 
                        type='text' 
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        
                        />   
            </label>
            {errors.email && <span>{errors.email}</span>}
         </div>

         <button type='submit'>Submit</button>

    </form>
  )
}
