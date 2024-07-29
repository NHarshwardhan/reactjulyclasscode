import React from 'react'

// export default function Greet(props) {
//   return (
//     <div>Welcome 
//         {props.fname} {props.lname}
//         <br/>
//         {props.age} years old
        
//     </div>
//   )
// }


// export default function Greet(props) {
//     let {fname, lname, age} = props
//     return (
//       <div>Welcome 
//           {fname} {lname}
//           <br/>
//           {age} years old
          
//       </div>
//     )
//   }
  

// export default function Greet({fname, lname, age}) {
//     return (
//       <div>Welcome 
//           {fname} {lname}
//           <br/>
//           {age} years old
          
//       </div>
//     )
//   }
  
// ------------------------Single Object------------------

// export default function Greet({personInfo:{firstname, lastname}}) {
//     return (
//       <div>Welcome -  {firstname} {lastname}
         
//       </div>
//     )
//   }
  

/*
  props:{
      personInfo:{
           firstname:'Mike',
           lastname:'Tyson'
      }
  }

*/

// ---------------------------Array of object---------

export default function Greet(props) {
 
    return (
      <div>
          {
             props.userInfo.map((u)=>(
                 <li key={u.id}>{u.id} -{u.name}- {u.age}</li>
             ))
          }
         
      </div>
    )
  }
  