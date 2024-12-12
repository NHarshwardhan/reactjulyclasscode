// Array Destructure

// function getScores(){
//     return [70,80,90]
// }

// let [score1, score2, score3] = getScores() //[70,80,90]

// console.log(score1,score2,score3)

// ---------------------
// function getScores(){
//     return [70,80]
// }

// let [score1, score2, score3] = getScores() //[70,80]

// console.log(score1,score2,score3)

// ------------------------------------

    // function getScores(){
    //     return [70,80,90,100]
    // }

    // let [score1, score2, score3] = getScores() //[70,80,90,100]

    // console.log(score1,score2,score3)


// -----------------------------------------------

    // function getScores(){
    //     return [70,80]
    // }

    // let [score1, score2, score3=10] = getScores() //[70,80]

    // console.log(score1,score2,score3)

// ------------------------------------------------

    // function getProfile(){
    //        return [
    //            'John',
    //            'Doe',
    //            ['Red', 'Green', 'Blue']
    //        ]
    // }

    // let [firstname, lastname,[color1,color2,color3]] = getProfile()

    // console.log(firstname, lastname)
    // console.log(color1,color2,color3)

// --------------------------


    // function stat(a,b){
    //       return [a+b, a+b/2 , a-b]
    // }


    // let [sum,avg, diff] = stat(10,20)
    // console.log(`Sum = ${sum} Diff = ${diff} , Avg = ${avg}`)


// ---------------Destrucutre with object

// let person = { firstname: 'Peter' ,  lastname: 'parker'}

// Destructure and store in custom variable name
    // let {firstname:fname , lastname: lname} = person
    // console.log(fname, lname)

// Destructure and store in same variable name as propertie name of object
    // let{firstname,lastname} = person
    // console.log(firstname, lastname)


// Default value
    // let{firstname,lastname, middlename='Dawson'} = person
    // console.log(firstname, middlename, lastname)

// Nested Object

    // let employee = {
    //       id: 1001,
    //       name:{
    //           first: 'Rose',
    //           last: 'Dawson'
    //       }
    // }

    // let {id,name:{first, last}} = employee

    // console.log(id , first, last)


// with Function Parameter

let display = ({firstname,lastname})=> console.log(`${firstname} ${lastname}`)

let person = { 
    firstname: 'Rick',
    lastname: 'Dawson'
}

display(person)








