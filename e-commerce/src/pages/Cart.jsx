import React from "react";
import {  useSelector } from "react-redux";
import Cartcard from "./Cards/Cartcard";
import "./cart.css"

function Cart() {
  const { cart } = useSelector((state) => state.product);
  console.log("cart", cart);

  return (
    <div className="cart--content">
      <div className="cart--content--header">
        <span className="cart--head--tag">E-Market Cart</span>
        <span className="remove--all">Remove ALL Items</span>
      </div>
      {cart?.map((item) => (
        <Cartcard item={item} />
      ))}
    </div>
  );
}

export default Cart;
