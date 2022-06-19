import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";

import "./DashBoard.css";
import Card from "../Book/Card";
import BookService from "../../services/BookService";

export default function () {

    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetchBookDetails();
    });

    function fetchBookDetails() {


        BookService.getAllBooks()
            .then((response) => {
                setBookDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <header className="header-dashboard">
                <div className="logo-content-dashboard">
                    <img
                        src="./education.svg"
                        alt="logo-content"
                        className="logo-content-img-dashboard"
                        width=""
                    />
                    <div>
                        <span className="text-dashboard">BookStore</span>
                    </div>
                </div>

                <div className="button-dashboard">
                    <Link to="/addbook">
                        <button className="button-2"> add book </button>
                    </Link>
                </div>

                <a href="/home">
                    <img src="./home.png"
                        height={25}
                        width={27}
                        className="home-image-dashboard"></img>
                </a>
            </header>

            <div className="wrapper">
                {bookDetails.map((book) => {
                    return (
                        <Card
                            bookId={book.bookId}
                            bookName={book.bookName}
                            authorName={book.authorName}
                            description={book.description}
                            price={book.price}
                            logo={book.logo}
                            quantity={book.quantity}
                        />
                    );
                })}
            </div>
        </div>
    )
}
