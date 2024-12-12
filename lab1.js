function fetchUserData(){
    return new Promise((resolve,reject)=>{

           setTimeout(()=>{
                resolve([
                     {id: 1, name: 'Alice', age: 28, address: {city:'New York'}, isActive: true},
                     {id: 2, name: 'Rose', age: 24, address: {city:'San Francisco'}, isActive: false},
                     {id: 3, name: 'Jasmine', age: 30, address: {city:'Los Angeles'}, isActive: true},

                ])
           },1000)
    })

}
//async/await
async function ProcessUserData(){

    try{
          const users =  await fetchUserData()

          //Filter active users
          const activeUsers = users.filter(user=>user.isActive)

          //Map to formatted user data
       
         const formattedUsers =  activeUsers.map(({id,name,age,address})=>{
            return{
                id,
                name: name.toUpperCase(),
                age,
                city:address?.city   //optional chaining operator
            } 
          })

         console.log(formattedUsers)

    }
    catch(err){
            console.log(`Error Fetching data ${err}`)
    }
   
}


ProcessUserData()