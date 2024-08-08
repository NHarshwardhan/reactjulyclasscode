import userApi from "./userApi"



export const fetchUsers = async()=>{

      try{
     
         const response =  await   userApi.getUsers() 
         return response.data
      }
      catch(err){
          console.log('Faile to fetch users :',err)
          throw err
      }
}


export const addUser = async(user)=>{

    try{
   
       const response =  await userApi.createUser(user) 
       return response.data
    }
    catch(err){
        console.log('Faile to add users :',err)
        throw err
    }
}

export const updateExistingUser = async(id,user)=>{

    try{
   
       const response =  await userApi.updateUser(id,user) 
       return response.data
    }
    catch(err){
        console.log('Faile to update users :',err)
        throw err
    }
}
