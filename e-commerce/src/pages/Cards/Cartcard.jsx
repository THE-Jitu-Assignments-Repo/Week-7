import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, reduceQuantity, RemoveSingle } from '../../features/products/productSlice'
import "./CartCard.css"


function Cartcard({item}) {
    const dispatch = useDispatch()

    const handleRemove = (Cid)=>{
        dispatch(RemoveSingle(Cid))
    }

    const handleDecrease =(dd)=>{
        if (item.Quantity < 1){
            dispatch(RemoveSingle(dd))
        }
        dispatch(reduceQuantity(item.id))
    }
  return (
    <div className='cart--card' key={item.id}>
        <div className="image">
            <img src={item.image} alt="cart--image" />
        </div>
        <div className="cart--item--head">
            <h3 className='cart--title'>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        <div className="cart--item--add">
            <button onClick={()=>handleDecrease(item.id)}>-</button>
            <p>{item.Quantity}</p>
            <button onClick={()=>dispatch(addQuantity(item.id))}>+</button>
        </div>
        <div className="cart--price--details">
            <div className="cart--kash--card">Ksh. {item.price}</div>
          <div className="item--discount--cart">Discount: {item.discount}%</div>
          <span className='remove--single' onClick={() => handleRemove(item.id)}>Remove</span>
        </div>
    </div>
  )
}

export default Cartcard