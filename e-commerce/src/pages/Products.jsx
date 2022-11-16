import React from "react";
import { FaList } from "react-icons/fa";
import {BsGrid3X3GapFill, BsStarFill} from 'react-icons/bs'
import "./products.css";

function Products() {
  return (
    <div className="product--main">
      <div className="product--sidebar">
        <div className="categories">
          <h3>Category</h3>
          <div className="categories--links">
            <hr />
            <ul>
              <li>Cloths</li>
              <li>Electics</li>
              <li>Shoes</li>
              <li>Luxury</li>
            </ul>
          </div>
        </div>
    
        <div className="categories">
          <h3>Order By</h3>
          <div className="categories--links">
            <hr />
            <ul>
              <li>Popularity</li>
              <li>Avarege rating</li>
              <li>Price: Low to high</li>
              <li>Price: High to Low</li>
            </ul>
          </div>
        </div>
   
        <div className="categories">
          <h3>Ratings</h3>
          <div className="categories--links">
            <hr />
            <ul>
              <li><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> 5 starts</li>
              <li><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> 4 stars</li>
              <li><BsStarFill /><BsStarFill /><BsStarFill /> 3stars</li>
              <li><BsStarFill /><BsStarFill /> 2 stars</li>
              <li><BsStarFill /> 1 star</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="product--content">
        <div className="content--nav">
            <button>ADD Product</button>
            <div className="content-sorters">
              <button><FaList /> List</button>
              <button><BsGrid3X3GapFill /> Grid</button>
            </div>
        </div>
        <div className="content--content">
            
        </div>

      </div>


    </div>
  );
}

export default Products;
