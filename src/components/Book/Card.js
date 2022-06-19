import React from "react";
import "./Card.css";
import book1 from "../../assets/Image 7.png";

export default function Card(props) {
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
        <button className="card-add-button">ADD TO BAG</button>
        <button className="card-wishlist-button">WISHLIST</button>
      </div>
    </div>
  );
}