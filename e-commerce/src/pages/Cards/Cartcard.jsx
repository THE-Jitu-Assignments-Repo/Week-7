import React from 'react'
import { useDispatch} from 'react-redux'
import { addQuantity, deleteItem, reduceQuantity} from '../../features/products/productSlice'
import "./CartCard.css"


function Cartcard({item}) {
    // console.log(item)
    const dispatch = useDispatch()

    const handleRemove = (Cid)=>{
        
        dispatch(deleteItem(Cid))
    }

    const handleDecrease =(dd)=>{
        if (item.Quantity <= 1){
            dispatch(deleteItem(dd))
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
            <div className="cart--kash--card">Ksh. {item.totalPrice}</div>
          <div className="item--discount--cart">Discount: {item.discount}%</div>
          <span className='remove--single' onClick={() => handleRemove(item.cartId)}>Remove</span>
        </div>
    </div>
  )
}

export default Cartcard