// import { async } from "@firebase/util";
import axios from 'axios'
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import { async } from '@firebase/util';
import { useParams } from 'react-router-dom';



const url = "https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/store.json"
const url2 = "https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart.json"

const initialState = {
    product: [],
    cart: [],
    totalQuantity: 0,
    showCart: false
}

export const postProduct = createAsyncThunk(
    "products/postProducts",
    async (product, thunkApi) => {

        const response = await axios.post(url, product)

        thunkApi.dispatch(getProduct()) // mike note this very key "wisdom"
        return response.data
    }
)




export const getProduct = createAsyncThunk(
    "products/getProduct",
    async () => {
        
        try {
            
            const response = await axios.get(url)
            let fetched = response.data
            let myData = []
            for (let key in fetched) {
                myData.push({
                    id: key,
                    title: fetched[key].title,
                    description: fetched[key].description,
                    image: fetched[key].image,
                    price: fetched[key].price,
                    discount: fetched[key].discount,
                    Quantity: fetched[key].Quantity,
                    totalPrice: fetched[key].totalPrice
                })
            }
            console.log(myData);
            return myData
            
        } catch (err) {
            console.log(err)
        }
    }
    
    )

    // add to cart
    export const addtocart = createAsyncThunk(
        "products/addtocart",
        async (item, {dispatch})=>{
            // console.log(item)
            const response = await axios.post(url2,item)
            dispatch(getcart())
            return response.data
        }
    )
    
    
    // get cart items
    
    export const getcart = createAsyncThunk(
        "products/getcart",
        async () => {
    
            try {
    
                const response = await axios.get(url2)
                let fetchedcart = response.data
                let mycartData = []
                for (let key in fetchedcart) {
                    mycartData.push({
                        cartId: key,
                        id: fetchedcart[key].id,
                        title: fetchedcart[key].title,
                        description: fetchedcart[key].description,
                        image: fetchedcart[key].image,
                        price: fetchedcart[key].price,
                        discount: fetchedcart[key].discount,
                        Quantity: fetchedcart[key].Quantity,
                        totalPrice: fetchedcart[key].totalPrice
                    })
                }
    
                // console.log("dvs", mycartData);
                return mycartData
    
            } catch (err) {
                console.log(err)
            }
        }
    )

// delete item from cart 

export const deleteItem = createAsyncThunk(
    "products/deleteItem",
    async (id,{dispatch})=>{

        // const {id} = useParams
        const response = await axios.delete(`https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart/${id}.json`);
        // console.log(response)
        dispatch(getcart());

    // await state.cart.filter((item) => {
    //     if(item.id === id){

    //         const response = axios.delete(`https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart.json/:${id}`)
    //         console.log(response)
    //         dispatch(getcart())
    //         return response.data
    //     }
    
    // });

    }
)




export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addQuantity: (state, action) => {
            const selectedQ = state.cart.map(item => {
                if (item.id === action.payload) {
                    item.Quantity +=1
                    item.totalPrice += item.totalPrice
                }
                return item
            })

            state.cart = selectedQ
        },
        reduceQuantity: (state, action) => {
            const selectedQ = state.cart.map(item => {
                if (item.id === action.payload) {
                    item.Quantity -= 1
                    item.totalPrice -=item.price
                } 
                return item
            })
            

            state.cart = selectedQ 
        },
    },
    extraReducers(builder) {
        builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            }),
            builder.addCase(postProduct.fulfilled, (state, action) => {
                state.product.push(action.payload);
            }),
        builder.addCase(addtocart.fulfilled, (state,action)=>{
            state.cart.push(action.payload)
        }),
        builder.addCase(getcart.fulfilled, (state,action)=>{
            state.cart = action.payload;

        })

    }
})

export const {
    addQuantity,
    reduceQuantity,
} = productSlice.actions;

export default productSlice.reducer;