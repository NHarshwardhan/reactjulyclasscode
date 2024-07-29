// Spread : unpack the value

let food1 = ['Pizza','Burger']

let allFood = ['Sandwich','Fries',...food1] // ['Sandwich','Fries', 'Pizza','Burger']

console.log(allFood)


// Form -  PersonDetails , AddressDetails

let personalDetails = { name: 'Rose Dawson', age: 23}
let addressDetails = { location:'USA'}

let finalData = {
      ...personalDetails,
      ...addressDetails
}

console.log(finalData)


// Example :-Array of Object
 
let Students = [
    {id:101, name:'Peter', age: 24},
    {id:102, name:'Peter', age: 24}
]

let RefreshStudents = [...Students,{id:103, name:'Jasmine', age: 24}]

console.log(RefreshStudents)

// Example : - Single Object

let UserInfo = { id: 1 , name: 'Rick', salary: 4000}

let NewSalary = {...UserInfo, salary: 5000}
                //{ id: 1 , name: 'Rick', salary: 5000}

console.log(UserInfo)
console.log(NewSalary)

