import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { RemoveALL } from "../features/products/productSlice";
import Cartcard from "./Cards/Cartcard";
import "./cart.css"

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.product);

  // console.log("remo test",RemoveALL)

  const handleRemove = () => {
    dispatch(RemoveALL())
    // console.log('remove items')
  }

  return (
    <div className="cart--content">
      <div className="cart--content--header">
        <span className="cart--head--tag">E-Market Cart</span>
        <span className="remove--all" onClick={handleRemove}>Remove ALL Items</span>
      </div>
      {cart?.map((item) => (
        <Cartcard item={item} />
      ))}
    </div>
  );
}

export default Cart;
