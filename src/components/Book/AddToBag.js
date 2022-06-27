import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./AddToBag.css";

import CartService from '../../services/CartService';

function AddToBag() {
  const [bagDetails, setBagDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  });

  const fetchCartDetails = () => {
    CartService.getCartDetails()
      .then((response) => {
        console.log(response);
        setBagDetails(response.data.data)
        console.log(bagDetails)
      })
  }


  const updateQuantity = (e, cartId) => {
    let quantity = e.target.value;
    CartService.updateCartQuantity(cartId, quantity);
  };

  const removeItemFromCart = (cartId) => {
    CartService.deleteCartItem(cartId).then((response) => { });
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
            className="home-image"></img>
        </a>
      </header>


      <div className="cart-count_header">
        <span className="cart">
          My Cart
        </span>
        <span className="cart-count">
          {" (" + bagDetails.length + " items)"}
        </span>

      </div>

      <div className="cart-container">

        {bagDetails.map((bagItem, i) => {
          return (
            <div key={i}>

              <div className="cart-box">

                <div className='cart-body'>


                  <div className="card-image-container">
                    <img
                      className="card-image"
                      src={bagItem.bookData.logo}
                      alt=""
                    />
                  </div>

                  <div className="card-title-author">
                    <h2 className="card-title">{bagItem.bookData.bookName}</h2>
                    <span className="card-author">by {bagItem.bookData.authorName} </span>
                  </div>

                  <span className="card-price">Rs {bagItem.bookData.price}</span>

                  <div className="cart_quantity">
                    <label htmlFor="#"> QTY: </label>
                    <input
                      className="quantity_text"
                      type="text"
                      defaultValue={bagDetails[i].quantity}
                      onChange={(e) => updateQuantity(e, bagItem.cartId)}
                    />
                  </div>

                  <div>
                    <button
                      className="remove-button"
                      onClick={() => removeItemFromCart(bagItem.cartId)}
                      variant="contained"
                      size="small"
                    >
                      Remove
                    </button>
                  </div>


                </div>
              </div>


            </div>
          )
        })}
      </div>

      <div>
        <button
          className="placeorder-button"

          variant="contained"
          size="small"
        >
          PLACE ORDER
        </button>
      </div>


      <div class="footer">
        <p>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</p>
      </div>

    </div>
  )
}

export default AddToBag