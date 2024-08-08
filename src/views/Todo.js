import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => fetchTodos(), []);

  const fetchTodos = () => {
    axios
      .get("http://localhost:1234/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <table className="container table table-bordered mt-3">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Task</th>
            <th>Action(s)</th>
        
          </tr>
        </thead>
        <tbody>
          {todos ? (
            todos.map(({ id,title,completed }) => (
              <tr key={id}>
                <td>
                    {/* <Link to={`/todos/${id}`}>{id}</Link> */}
                    
                    {/*  Without exposing id in url */}
                    <Link to='/todos/details' state={{uid: id}}>{id}</Link>

                </td>
                <td>{title}</td>
                <td>
                    <Link to="/todos/edit" state={{record:{id, title,completed}}} className="btn btn-warning btn-sm">Edit</Link>
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td> loading ....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
