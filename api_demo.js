
function fetchUserData(userid){  //userid = 1
    return new Promise((resolve,reject)=>{
        
          setTimeout(()=>{
             const users= {
                 1: {id: 1, name: 'Alice'},
                 2: {id: 2 , name: 'Rick'}
             }

             const user = users[userid]  // users[1] = {id: 1, name: 'Alice'}

             if(user){
                  resolve(user)
             }
             else{
                  reject('User Not Found')
             }

          },2000)
    })

}

//Handling the promise object
// fetchUserData(4)
//    .then(user => console.log(user))  // Successful 
//    .catch(error=> console.log(error)) // failure


// async/await----------------------------------

async function displayUserRecord(){
         
     try{
        let user = await  fetchUserData(5)
        console.log(user)
     }
     catch(err){
          console.log(err)
     }
}

// displayUserRecord()



// --------------Real Api Communication----------------


// function getRemoteData(url){

//     fetch(url)
//        .then(response=>response.json())
//        .then(data=>console.log(data))
//        .catch(err=>console.log(err))
// }

// getRemoteData('https://jsonplaceholder.typicode.com/users')

// async/await
async function showUserData(){
    try{
         const response =   await fetch('https://jsonplaceholder.typicode.com/users')
         const data = await response.json()
         for(let u of data){
             console.log(u.name)
         }
    }
    catch(err){
         console.log(err)
    }
      
}

showUserData()