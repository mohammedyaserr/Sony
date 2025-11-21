import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const url = import.meta.env.VITE_APP_URL;


  const [logindata, setLogindata] = useState({
    email:"",
    pass:"",
  })
  
  const handlechange = (e) => {
    setLogindata ({...logindata , [e.target.name] : e.target.value})
  }
  
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const response = await axios.post(`${url}/auth/userlogin`,logindata);

      if (response.status === 200) {
        alert("login success")
        navigate('/admindash')
      }else{
        alert("login as user")
        navigate("/");
      }
    } catch (error) {
      alert("Incorrect email or Password")
      console.log(error);

    }

  }
    

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={logindata.email} onChange={handlechange} />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="pass" value={logindata.pass} onChange={handlechange}/>
        </div>

        <button className="login-btn" onClick={handlelogin}>Login</button>

        <p className="signup-text">
          Don’t have an account? <span onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
