import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';

//for password
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./LoginForm.css"
import UserService from '../../services/UserService';

export default function LoginForm(props) {

    //pasword
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    //impl
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({ ...userDetails, [name]: value });
        console.log(userDetails);
    };

    const login = (event) => {
        event.preventDefault();
        let loginData = {
            email: userDetails.email,
            password: userDetails.password,
        };

        UserService.userLogin(loginData).then((response) => {
            console.log("Login" + response)
            alert("Logined successfully");
            props.history.push({
                pathname: "/home",
            });
        }).catch((response) => {
            alert(response.response.data.data);
        });

    };


    return (
        <div>

            <header className="header">
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
                <a href="/home">
                    <img src="./home.png"
                        height={25}
                        width={27}
                        className="home-image"></img>
                </a>
            </header>

            <div className="form-content-login">

                <form className="form-login" action="#" onSubmit={login}>

                    <div className="form-head-content">
                        <div className="form-head-login">Book Store Login</div>
                    </div>

                    <div className="row-content-login">
                        <TextField
                            className="input-login"
                            id="outlined-helperText"
                            type="text"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="row-content-login">

                        <FormControl sx={{ width: '24ch' }} variant="outlined">
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <OutlinedInput
                                id="outlined-adornment-password"
                                name="password"
                                placeholder='Enter password'
                                type={values.showPassword ? 'text' : 'password'}
                                value={userDetails.password}
                                onChange={handleInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            required
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                className="password-login"
                            />
                        </FormControl>

                    </div>



                    <div>
                        <button className='button-login' type="login"> Login</button>
                    </div>

                    <div className="link">
                        <Link to="/registration" className="link"> Click here to Register </Link>
                    </div>

                    <div className="link">
                        <Link to="/forgotpass" className="link"> Forgot password? </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
