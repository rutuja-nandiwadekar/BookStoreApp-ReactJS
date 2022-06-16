import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

export default function () {
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


                <div className="link-home">
                    <Link to="/login" className="link-home"> Login </Link>
                </div>

                <div className="link-home">
                    <Link to="/registration" className="link-home"> Sign up </Link>
                </div>
                <div className="link-home">
                    <Link to="/addbook" className="link-home"> Add Book </Link>
                </div>
            </header>

            <h1><center>welcome !!!!!</center></h1>

        </div>
    )
}
