import { useState } from "react"


const useLocalStorage = (key, initialValues)=>{

    const [storedValue, setStoredValue] = useState(()=>{
          
         try{
               const item =  localStorage.getItem(key)
               return item? JSON.parse(item): initialValues

          }
          catch(err){
             console.log(err)
             return initialValues
          }
    })


    const setValue = (value)=>{

        //value = {text: 'meeting at 6pm' , completed : false}
          
         try{
               setStoredValue(value)
               localStorage.setItem(key, JSON.stringify(value))
          }
          catch(err){

          }
    }
        
   
     return [storedValue , setValue]
}


export default useLocalStorage


