// import { async } from "@firebase/util";
import axios from 'axios'
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";



const url = "https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/store.json"
const initialState = {
    product: [],
    cart: []
}

export const postProduct = createAsyncThunk(
    "products/postProducts",
    async (product) => {

        const response = await axios.post(url, product)
        return response.data
        getProduct()
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
                    discount: fetched[key].discount
                })
            }

            return myData

        } catch (err) {
            console.log(err)
        }
    }

)



export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers(builder) {
        builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            }),
            builder.addCase(postProduct.fulfilled, (state, action) => {
                state.product.push(action.payload)
            })

    }
})


export default productSlice.reducer;