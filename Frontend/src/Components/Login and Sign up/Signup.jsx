import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const Signup = () => {

    const url = import.meta.env.VITE_APP_URL;


    const Navigate = useNavigate();

    const [userdata, setUserdata] = useState({
      name:'',
      email:'',
      num:'',
      pass:'',
    })

    console.log(userdata);
    

    const handlechange = (e)=> {
      setUserdata({...userdata, [e.target.name] : e.target.value})
    }

    const handlesignup = async (e)=> {
      e.preventDefault()
      try {
        const response = await axios.post(`${url}/user/addUserslogin`,userdata);
        if (response.status === 200) {
          console.log("success");
          alert("reg success")
          Navigate('/login')
        }else{
          console.log("failed");
          alert("reg failed")
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" name="name" value={userdata.name} onChange={handlechange} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter you email" name="email" value={userdata.email} onChange={handlechange}/>
          </div>

          <div className="input-group">
            <label>Number</label>
            <input type="number" placeholder="Enter your mobile number" name="num" value={userdata.num} onChange={handlechange}/>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" name="pass" value={userdata.pass} onChange={handlechange} />
          </div>


          <button className="signup-btn" onClick={handlesignup}>Sign Up</button>
        </form>

        <p className="bottom-text">
          Already have an account? <span onClick={() => Navigate('/login')}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
