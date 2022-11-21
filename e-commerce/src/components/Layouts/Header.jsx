import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "../../config/firebase";
import { logout, selectUser, login } from "../../features/auth/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {FaCaretDown, FaEnvelope, FaShoppingCart, FaUser, FaUserLock} from 'react-icons/fa'
import {BsFillBasket3Fill} from 'react-icons/bs'
import "./Layout.css";


function Header() {
    const navigate = useNavigate();

    // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
    navigate('/login')
  };

  const user = useSelector(selectUser);

  const { cart }= useSelector(state=> state.product)


  return (
    <div className="header-main">
      <div className="navbar">
        <div className="title--tag">
          <h2><i className="title--tag--E">E</i><span>-Market</span></h2>
        </div>
        <div className="navlinks">
          <nav className="nav--links">
            {!user &&<Link to="login" className="links--tag"><FaUser /> Login/Register</Link>}
            {user && <Link to="home" className="links--tag">Home</Link> }  
            {user && <Link to="/products" className="links--tag"><BsFillBasket3Fill />Products</Link>}
            {user && <Link to="/about"  className="links--tag">About</Link>}
            {user && <Link to="/contact" className="links--tag"><FaEnvelope /> Contact</Link>}
            {user && <Link to="cart" className="links--tag">Cart <FaShoppingCart size={20} /><p className="cart--num">{cart?.length}</p></Link>}
            {user && (
                <div className="dropdown"><span><FaUser size={20}/>Account </span><FaCaretDown/>
                    <div className="dropdown--content">

                <ul>

                    <li className="css-button--arrow--black"><FaUser />Profile</li>
                    <li className="css-button--arrow--black" onClick={logoutOfApp}><FaUserLock /> Logout</li>
                </ul>
                    </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
