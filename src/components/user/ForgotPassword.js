import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

import TextField from '@mui/material/TextField';

import "./ForgotPassword.css"
import UserService from '../../services/UserService';

export default function ForgotPassword(props) {

  const [email, setEmail] = useState("");

  const handleInput = (event) => {
    let value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const forgotPassword = (event) => {
    event.preventDefault();

    UserService.forgotPassword(email).then((response) => {
      setEmail("");
      console.log("Login" + response)
      alert("Reset Password otp Has Been Sent To Your Email Address");
      props.history.push({
        pathname: "/resetPass"
      })
    }).catch((response) => {
      alert(response.response.data.data);
    });

  };

  return (
    <div>

      <header className="header-content header">
        <div className="logo-content">
          <img
            src="./education.svg"
            alt="logo-content"
            className="logo-content-img"
            width=""
          />
          <div>
            <span className="text">BookStore</span>
          </div>
        </div>
      </header>

      <div className="form-content-forgot">

        <form className="form-forgot" action="#" onSubmit={forgotPassword} >

          <div className="form-head-content">
            <div className="form-head-forgot">Forgot Password ??</div>
          </div>


          <div className="row-content-forgot">
            <TextField
              className="input-forgot"
              id="outlined-helperText"
              type="text"
              name="email"
              label="Email"
              placeholder="Email"
              required
              value={email}
              onChange={handleInput}
            />
          </div>

          <div>
            <button className='button-forgot' type="login"> Reset Password</button>
          </div>

          <div className="link">
            <Link to="/login" className="link"> Back </Link>
          </div >

        </form>
      </div>
    </div>
  )
}
