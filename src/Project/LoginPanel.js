// useState() with object
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPanel() {
  const [loginInfo, setLogininfo] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // capture user input
  const handleChange = (event) => {
    setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  const loginProcess = () => {
      axios.get('http://localhost:1234/user')
          .then(response=>{
                let users= response.data
                let {role} = users.find(u => u.email === loginInfo.email && u.password=== loginInfo.password)
                if(role==='CUSTOMER'){
                      sessionStorage.setItem('role',role)
                      navigate('/customerdb')
                }
                else if(role==='MANAGER'){
                    sessionStorage.setItem('role',role)
                    navigate('/managerdb')
                }else{
                    alert('User does not exist')
                }

                
          })
          .catch(err=>{
            console.log(err)
          })

  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-5">
          <h1 className="mb-5">Login Panel</h1>
          <label>Username</label>
          <br />
          <input type="text" className="form-control" name="email" onChange={handleChange} />
          <br />
          
          <label>Password</label>
          <br />
          <input type="password" className="form-control" name="password" onChange={handleChange} />
          <br />
          
          <button className="btn btn-success mt-1" onClick={loginProcess}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
