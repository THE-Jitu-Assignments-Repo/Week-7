import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, getcart } from "../../features/products/productSlice";

import "./productcard.css"

function ProductCard({data,id}) {
    // console.log('itemId', id);
    const {cart} = useSelector(state=>state.product)
    const dispatch = useDispatch()
    // console.log(data.id);
    const handleCart =async (data)=>{
        // let cart = await dispatch(getcart());
        // console.log(cart.payload);
        // console.log(data.id);
        // console.log(cart.payload.some(cartItem => cartItem.id === data.id))
        if (!cart?.some(cartItem => cartItem.id === id)) {
            console.log('working');
            // return
            dispatch(addtocart(data));
        }
        // dispatch(addtocart(data))
        // if(!cart?.some(cartItem => cartItem.id == id)){            
        //     // dispatch(AddCart(data))
        //     // console.log("skdc 1111",data);
        //     dispatch(addtocart(data))
        // }else{
        //     console.log(data.Quantity);
        // }
            
    }
 
  return (
    <div className="product--card" key={id}>
      <div className="product--card__top">
          <div className="product--rate">-{data?.discount}%</div>
        <img src={data?.image} alt="product--img" className="image--product"/>
      </div>
      <div className="product--card__bottom">
        <div className="product--card__header">
          <div className="title--card">{data?.title}</div>
        </div>
        {/* <div className="product--description">{data.description}</div> */}
        <div className="product--card__header">
          <div className="kash--card">
            <div className="kk">
                {/* <div>Ksh. {Math.floor(Math.abs(data.price/data.discount))}</div> */}
                <div className="from">Ksh.{data?.price}</div>
            </div>
            </div>
          <div className="product--cart" onClick={()=>handleCart(data)}>Add to Cart <FaShoppingBag /></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
