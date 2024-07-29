//  ES5

// Function expression
// var sum = function(a ,b){
//     return  a+b //30
// }

// console.log(sum(10,20))

// ES6
//Arrow Function

// Arrow function with multiple parameter and single expression
let sum = (a ,b) => a+b
console.log(sum(20,30))

// Arrow function with single parameter
// let greet = (message)=> message
let greet = message => message
console.log(greet('Welcome To Javascript World...!'))

// Arrow function with single parameter and multiple expression
let checkAge = age =>{
        if(age>=18){
              return `${age} can vote..!`
        }else{
             return `${age} can not vote..!`
        }
}
console.log(checkAge(12))
console.log(checkAge(22))


// Arrow function with no parameter

let log = ()=> 'Logging  info....'
console.log(log())


// ----Example
// setTimeout(function(){

//       console.log('Making API CALL....')
// },2000)

setTimeout(()=>console.log( 'Making Api Call'),2000)