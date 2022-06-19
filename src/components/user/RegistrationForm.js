import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

import TextField from '@mui/material/TextField';

//date
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//for password
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./RegistrationForm.css"
import UserService from '../../services/UserService';

export default function RegistrationForm() {

    //for password 
    const [date, setDate] = React.useState(null);

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
    let [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        kyc: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        password: "",
        isVerified: false,
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({ ...userDetails, [name]: value });
        console.log(userDetails);
    };

    const registration = (event) => {
        event.preventDefault();
        let userData = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            kyc: userDetails.kyc,
            dateOfBirth: userDetails.dateOfBirth,
            phoneNumber: userDetails.phoneNumber,
            email: userDetails.email,
            password: userDetails.password,
        };

        UserService.userRegistration(userData).then((response) => {
            console.log("created" + response)
            alert("Registred successfully...Please check your mail for verification");
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

            <div className="form-content">

                <form className="form" action="#" onSubmit={registration}>

                    <div className="form-head-content">
                        <div className="form-head">BookStore Sign up
                            <Link to="/home" >
                                <img className="logo-content-image2" src="../cancel.png" style={{ height: "20px" }} />
                            </Link>
                        </div>
                    </div>

                    <div className="row-content">
                        {/* FIRST NAME */}
                        <TextField
                            className="input-reg"
                            type="text"
                            id="fname"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={userDetails.firstName}
                            onChange={handleInput}
                            label="First Name"
                            required
                        />

                        {/* LAST NAME */}
                        <TextField
                            className="input-reg"
                            type="text"
                            id="lname"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={userDetails.lastName}
                            onChange={handleInput}
                            label="Last Name"
                            required
                        />
                    </div>

                    <div className="row-content">
                        {/* EMAIL */}
                        <TextField
                            className="input-reg"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Id"
                            required
                            label="Email"
                            value={userDetails.email}
                            onChange={handleInput}
                        />

                        {/* PASSWORD */}
                        <FormControl sx={{ width: '24ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                name="password"
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
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className="row-content">

                        {/* CONFIRM PASSWORD */}
                        <FormControl sx={{ width: '24ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-password"
                                name="password"
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
                                label="Password"
                            />
                        </FormControl>

                        {/* PHONE NUMBER */}
                        <TextField
                            className="input-reg"
                            type="text"
                            name="phoneNumber"
                            id="phone"
                            placeholder="Phone Number"
                            label="Phone number"
                            required
                            value={userDetails.phoneNumber}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="row-content">
                        {/* DATE */}
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DatePicker
                                className="input-reg"
                                label="Date of Birth"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField className="input-reg-date"{...params} />}
                            />
                        </LocalizationProvider>

                        {/* KYC */}
                        <TextField id="kyc"
                            type="text"
                            className="input-reg"
                            name="kyc"
                            placeholder="KYC"
                            label="kyc"
                            required
                            value={userDetails.kyc}
                            onChange={handleInput}
                        />
                    </div>

                    {/* BUTTONS */}
                    <div >
                        <button type="submit" className="button" id="button" > Sign up </button>
                    </div>

                    <div className="link">
                        <Link to="/login" className="link"> Click here to Login </Link>
                    </div >

                </form>
            </div>
        </div>
    )
}
