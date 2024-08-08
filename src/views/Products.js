import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => fetchProducts(), []);
  
    const fetchProducts = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => setProducts(response.data.products))
        .catch((error) => console.log(error));
    };
  
    return (
      <div>
        <table className="container table table-bordered mt-3">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Task</th>
           
          
            </tr>
          </thead>
          <tbody>
            {products ? (
              products.map((p) => (
                <tr key={p.id}>
                  <td>
                      {/* <Link to={`/todos/${id}`}>{id}</Link> */}
                      
                      {/*  Without exposing id in url */}
                      <Link to='/products/details' state={{productInfo:p}}>{p.id}</Link>
  
                  </td>
                  <td>{p.title}</td>
                 
                  
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
