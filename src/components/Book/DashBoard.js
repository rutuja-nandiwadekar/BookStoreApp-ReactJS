import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";



import "./DashBoard.css";
import Card from "../Book/Card";
import BookService from "../../services/BookService";
import CartService from "../../services/CartService";

export default function (props) {

    const [bookDetails, setBookDetails] = useState([]);
    const [search, setSearch] = useState([]);
    const [sortType, setSortType] = useState("");
    const [cartDetails, setCartDetails] = useState([])
    let [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        fetchBookDetails();
        fetchCartDetails();
    });

    const fetchCartDetails = () => {
        CartService.getCartDetails()
            .then((response) => {
                setCartDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    function fetchBookDetails() {

        // if (search === "")
        //     if (sortType === "database" || sortType === "")
        BookService.getAllBooks()
            .then((response) => {
                setBookDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }


    const handlerSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
        BookService.searchByBookName(search)
            .then((response) => {
                setBookDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const getSelectValue = (value) => {
        setSortType(value);
        if (value === "ascending") {
            BookService.getAllInIncreasingOrder()
                .then((response) => {
                    console.log(response);
                    setBookDetails(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (value === "descending") {
            BookService.getAllInDecreasingOrder()
                .then((response) => {
                    setBookDetails(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const getCartCount = (count) => {
        setCartCount(count)
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

                <div className="search-bar">
                    <input
                        type="text"
                        className="search"
                        name="search"
                        value={search}
                        onChange={handlerSearch}
                        placeholder="Search ...." />
                </div>

                <div>
                    <span className="button-dashboard-plus"><strong>+</strong></span>
                </div>

                <a href="/addbook">
                    <img src="./books.png"
                        height={25}
                        width={27}
                        className="button-dashboard"></img>
                </a>

                <div>
                    <span className="carttext-dashboard">Cart</span>
                </div>
                <a href="/bag">
                    <img src="./supermarket.svg"
                        height={25}
                        width={27}
                        className="supermarket-image-dashboard"></img>
                </a>

                <a href="/home">
                    <img src="./home.png"
                        height={25}
                        width={27}
                        className="home-image-dashboard"></img>
                </a>
            </header>


            <div className="count_header">
                <span className="books">
                    Books
                </span>
                <span className="books-count">
                    {" (" + bookDetails.length + "items)"}
                </span>

            </div>

            {/* <div className="sort_header">
                <select getSelectValue={getSelectValue} name="book" id="book">
                    <option value="database">As per Database</option>
                    <option value="ascending">Price Low to high</option>
                    <option value="descending">Price High To Low</option>
                </select>
            </div> */}

            <div className="wrapper">
                {bookDetails.map((book) => {
                    return (
                        <Card
                            bookId={book.bookID}
                            bookName={book.bookName}
                            authorName={book.authorName}
                            description={book.description}
                            price={book.price}
                            logo={book.logo}
                            quantity={book.quantity}
                            button1="ADD TO BAG"
                            button2="WISHLIST"
                            getCartCount={getCartCount}
                        />
                    );
                })}
            </div>

        </div>
    )
}
