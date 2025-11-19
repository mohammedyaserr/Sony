import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    
    const Navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Don’t have an account? <span onClick={() => Navigate('/signup')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
