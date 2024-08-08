const { useState } = require("react")

const useForm = (initialValue , onsubmit)=>{
      
    const [values, setValues] = useState(initialValue)
    const [errors , setError] = useState({})


    const handleChange = (event)=>{
   
      const {name ,value} = event.target

      setValues({
          ...values,
          [name]:value
      })

    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // validation

        if(validate()){
             onsubmit(values)
        }
    }

    const validate = ()=>{
        let valid = true
        const newErrors = {}


        if(!values.username){
              newErrors.username = 'Username is required'
              valid = false
        }

        if(!values.email){
            newErrors.email = 'Email is required'
            valid = false
       }

       setError(newErrors)
       return valid  
    }

    return{
          handleChange,
          errors,
          values,
          handleSubmit
    }


}


export default useForm
