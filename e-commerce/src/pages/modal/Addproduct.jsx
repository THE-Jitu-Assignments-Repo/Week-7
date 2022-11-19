import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getProduct, postProduct } from "../../features/products/productSlice";
import "./modal.css";

function Addproduct({setIsOpen}) {
  const dispatch = useDispatch();
  const [newproduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
    discount: "",
  });

  const handleChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct({...newproduct, Quantity:1}));
    dispatch(getProduct());
    setIsOpen()
  };


  return (
    <div className="main--modal">
      <div className="modal--content">
        <div className="modal--form">
          <div className="close" >
             <h3>ADD NEW PRODUCTS</h3>
            <AiOutlineCloseSquare size={30} onClick={setIsOpen} className='close--close'/>
          </div>
          <form className="form" >
            <input
              type="url"
              name="image"
              placeholder="Product Image Url"
              value={newproduct.image}
              onChange={handleChange}
              autoFocus
            />
            <input
              type="text"
              name="title"
              placeholder="Enter the name of the product"
              value={newproduct.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              value={newproduct.category}
              placeholder="Product Category"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={newproduct.description}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Ksh."
              value={newproduct.price}
              onChange={handleChange}
            />
            <input
              type="number"
              name="discount"
              placeholder="Product Discount ksh."
              value={newproduct.discount}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
