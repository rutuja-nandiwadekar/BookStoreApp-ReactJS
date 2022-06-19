import { Link } from "react-router-dom";
import React from "react";

import "./Home.css"

export default function () {

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

                <div className="button-home">

                    <Link to="/dashboard" >
                        <button className="button-1"> collection </button>
                    </Link>

                    <Link to="/login">
                        <button className="button-1" > Login </button>
                    </Link>

                    <Link to="/registration">
                        <button className="button-1"> Signup </button>
                    </Link>

                    <a href="/home">
                        <img src="./home.png"
                            height={25}
                            width={27}
                            className="home-image-homepage"></img>
                    </a>
                </div>
            </header>


            <h1><center>welcome to book store !!!!!</center></h1>
        </div>
    )
}
