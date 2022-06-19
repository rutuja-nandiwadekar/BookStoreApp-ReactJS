import React from 'react'
import { Link } from "react-router-dom";
import "./ResetPassword.css"
import TextField from '@mui/material/TextField';
import { useState } from "react";

import UserService from '../../services/UserService';

//for password
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ResetPassword(props) {

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
    const [passwordData, setPasswordData] = useState({
        password: "",
        otp: "",
    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setPasswordData({ ...passwordData, [name]: value });
        console.log(passwordData)
    };

    const resetPassword = (event) => {
        event.preventDefault();
        let password = {

            password: passwordData.password,
            otp: passwordData.otp,
        };

        UserService.resetPassword(passwordData.otp, passwordData.password).then((response) => {
            console.log("reset password" + response)
            alert("password reset successfully");
            props.history.push({
                pathname: "/login",
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
            <div className="form-content-reset">

                <form className="form-reset" action="#" onSubmit={resetPassword}>

                    <div className="form-head-content">
                        <div className="form-head-reset">Reset Your Password</div>
                    </div>

                    <div className="row-content-reset">
                        <FormControl sx={{ width: '55ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                name="password"
                                value={passwordData.password}
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
                                label="New Password"
                            />
                        </FormControl>
                    </div>

                    <div className="row-content-reset">
                        <FormControl sx={{ width: '55ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Retype new Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                name="password"
                                value={passwordData.password}
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
                                label="Retype new Password"
                            />
                        </FormControl>
                    </div>

                    <div className="row-content-reset">

                        <TextField
                            className="input-reset"
                            id="outlined-helperText"
                            type="text"
                            name="otp"
                            label="Otp"
                            placeholder="Otp"
                            value={passwordData.otp}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <button className='button-reset' type="login"> Submit </button>
                    </div>

                    <div className="link">
                        <Link to="/login" className="link"> Back </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
