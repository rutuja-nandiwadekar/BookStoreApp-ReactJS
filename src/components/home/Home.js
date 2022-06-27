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

                    <a href="/login">
                        <img src="./login.png"
                            height={25}
                            width={27}
                            className="login-image-homepage"></img>
                    </a>

                    <a href="/registration">
                        <img src="./add-user-2.png"
                            height={25}
                            width={27}
                            className="reg-image-homepage"></img>
                    </a>
                </div>
            </header>


            <h1><center>welcome to book store !!!!!</center></h1>

            <div class="footer">
                <p>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</p>
            </div>
        </div>

    )
}
