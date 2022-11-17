import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddCart } from "../../features/products/productSlice";

import "./productcard.css"

function ProductCard({data}) {

    const dispatch = useDispatch()

    const handleCart =(data)=>{
        dispatch(AddCart(data))
    }
 
  return (
    <div className="product--card" key={data.id}>
      <div className="product--card__top">
        <img src={data.image} alt="product--img" className="image--product"/>
      </div>
      <div className="product--card__bottom">
        <div className="product--card__header">
          <div className="title--card">{data.title}</div>
          <div className="product--rate">{data.discount}%</div>
        </div>
        {/* <div className="product--description">{data.description}</div> */}
        <div className="product--card__header">
          <div className="kash--card">Ksh.{data.price}</div>
          <div className="product--cart" onClick={()=>handleCart(data.id)}>Add to Cart <FaShoppingBag /></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
