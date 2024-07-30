import React, { useState } from 'react'
import movieInfo from './movieInfo'

export default function MovieApp() {

  const [movieList , setMovieList] = useState(movieInfo)

  const createTableBody = ()=>(
       movieList.map((m , index)=>(
            <tr key={index}>
                 <td>{m.title}</td>
                 <td>
                     <input type='checkbox' checked={m.seen} onChange={()=>toggleMovie(m.title)}/>
                 </td>
            </tr>
       ))
  )
  
  const toggleMovie = (title)=>{
     let newData = [...movieList]
     const foundMovie =  newData.find(m=>m.title === title)
     foundMovie.seen = !foundMovie.seen
     setMovieList(newData)



  }
  return (
    <div style={{marginLeft: '10px'}}>
        <table border={1}>
             <thead>
                 <tr>
                     <th>Movie Name</th>
                     <th>Watched</th>
                 </tr>
             </thead>
             <tbody>
                  {createTableBody()}
             </tbody>
        </table>

    </div>
  )
}




// const a = {name: 'xyz' , age: 23}

// a.age = 45

// a = {name:'', age:''}