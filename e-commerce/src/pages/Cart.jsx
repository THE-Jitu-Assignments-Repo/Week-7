import React, { useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deleteItem, getcart, RemoveALL } from "../features/products/productSlice";
import Cartcard from "./Cards/Cartcard";
import "./cart.css"

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.product);


  const handleRemove = () => {
    cart?.map(item => dispatch(deleteItem(item.id)))
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
      <div className="total--session">
      <hr/>
      <span>Total:  </span>

      </div>

    </div>
  );
}

export default Cart;
