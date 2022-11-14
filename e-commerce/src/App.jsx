
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/auth/userSlice';
import { auth, onAuthStateChanged } from './config/firebase';
import Home from "./pages/Home"
import Login from './pages/Login';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

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

  return (
    <div className="App">
      <Home />
       {/* // check if a user is logged in */}
      {!user ? (
        // display the login form 
        <Login />
      ) : (
        // display the rest of the app
        <div className='app__body'>
          {/* Rest of the app */}
        </div>
      )}
  
    </div>
  )
}

export default App
