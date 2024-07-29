
const user = {
       name: 'Rock',
       profile:{
          email:'rock@gmail.com',
          address:{
               street:'123- New Delhi',
               city: null
          }
       }
}
const result = user?.profile?.address?.city ?? "City is not available"
console.log(result)

//- explicit way to check the existence

// if(user.profile.address.city){
//     console.log(user.profile.address.city)
// }
// else{
//       console.log('city is not available')
// }



/*
 Nullish coalescing operator
   -  return second value if first one is either null or undefined
   -  value1 ?? value2

*/