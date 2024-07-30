import React from "react";

export default function Card(props) {
  let { imgSrc, text, title } = props.movie;

  const printMovieName = (movie)=>{
            alert(movie)
  }

  const sayHi = ()=>{
   alert('Hello Everyone..!')
  }
  return (
    <div>
      <img src={imgSrc} width={100} height={100} alt="" />
      <h4>{title}</h4>
      <h6>{text}</h6>

       {/* Calling Event Handler without parameter */}
      <button onClick={sayHi} >Say Hi</button>

        {/* Calling Event Handler with parameter */}
      <button onClick={()=>printMovieName(title)}>
        Print title
      </button>
     
       
    </div>
  );
}
