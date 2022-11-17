import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import userReducer from './features/auth/userSlice';
import productsReducer from './features/products/productSlice'

const RootReducer = combineReducers({

  user: userReducer,
  product: productsReducer
})

export default configureStore({
  reducer: RootReducer,
});