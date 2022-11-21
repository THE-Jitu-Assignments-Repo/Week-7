import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../../features/products/productSlice";

import "./productcard.css"

function ProductCard({data,id}) {
    const {cart} = useSelector(state=>state.product)
    const dispatch = useDispatch()
    // console.log(data.id);
    const handleCart =(data)=>{
        if( !cart.some(cartItem => cartItem.id == id)){            
            dispatch(AddCart(data))
        }
            
    }
 
  return (
    <div className="product--card" key={data.id}>
      <div className="product--card__top">
          <div className="product--rate">-{data.discount}%</div>
        <img src={data.image} alt="product--img" className="image--product"/>
      </div>
      <div className="product--card__bottom">
        <div className="product--card__header">
          <div className="title--card">{data.title}</div>
        </div>
        {/* <div className="product--description">{data.description}</div> */}
        <div className="product--card__header">
          <div className="kash--card">
            <div className="kk">
                <div>Ksh. {Math.floor(Math.abs(data.price/data.discount))}</div>
                <div className="from">Ksh.{data.price}</div>
            </div>
            </div>
          <div className="product--cart" onClick={()=>handleCart(data.id)}>Add to Cart <FaShoppingBag /></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
