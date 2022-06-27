import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import book1 from "../../assets/Image 7.png";
import CartService from "../../services/CartService";

export default function Card(props) {

  const cardHandler = (e) =>{
    let bookId = props.bookId;
    console.log(props.bookId)
    console.log(props.bookName)
    CartService.addBookToCart(bookId)
    .then((response)=>{
      console.log(response)
      alert(response.data.message)
    })
    .catch((error)=>{
      console.log(error)
      alert(error.response.data.message)
    })

  }
  return (
    <div key={props.bookId} className="book-card">
      <div className="card-body">

        <div className="card-image-container">
          <img
            className="card-image"
            src={(props.logo && props.logo) || book1}
            alt=""
          />
        </div>

        <div className="card-title-author">
          <h2 className="card-title">{props.bookName}</h2>
          <span className="card-author">by {props.authorName}</span>
        </div>

        <span className="card-price">Rs.{props.price}</span>
      </div>

      <div className="card-button">
      <button onClick={cardHandler} className="card-add-button">{props.button1}</button>
        <button className="card-wishlist-button">{props.button2}</button>
      </div>
    </div>
  );
}