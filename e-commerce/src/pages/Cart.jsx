import React, { useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getcart, RemoveALL } from "../features/products/productSlice";
import Cartcard from "./Cards/Cartcard";
import "./cart.css"

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.product);

  // console.log("remo test",cart)

  const handleRemove = () => {
    dispatch(RemoveALL())
  }
    useEffect(() => {
    dispatch(getcart());
  }, []);

  return (
    <div className="cart--content">
      <div className="cart--content--header">
        <span className="cart--head--tag">E-Market Cart</span>
        <span className="remove--all" onClick={handleRemove}>CLEAR CART</span>
      </div>
      {cart?.map((item) => (
        <Cartcard item={item} />
      ))}
    </div>
  );
}

export default Cart;
