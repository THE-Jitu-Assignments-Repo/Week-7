import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../config/firebase";
import { logout, selectUser } from "../../features/auth/userSlice";
import { Link } from "react-router-dom";
import {FaEnvelope, FaUser} from 'react-icons/fa'
import {BsFillBasket3Fill} from 'react-icons/bs'
import "./Layout.css";


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  const user = useSelector(selectUser);

  return (
    <div className="header-main">
      <div className="navbar">
        <div className="title--tag">
          <h2>E-Market</h2>
        </div>
        <div className="navlinks">
          <nav className="nav--links">
            {user && <Link to="home" className="links--tag">Home</Link> }  
            {user && <Link to="/products" className="links--tag"><BsFillBasket3Fill />Products</Link>}
            {user && <Link to="/about"  className="links--tag">About</Link>}
            {user && <Link to="/contact" className="links--tag"><FaEnvelope /> Contact</Link>}
            {user && (
                <button
                className="css-button--arrow--black"
                onClick={logoutOfApp}
                >
                <FaUser /> Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
