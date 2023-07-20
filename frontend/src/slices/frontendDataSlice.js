import { createSlice } from "@reduxjs/toolkit";



const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1;i<28;i++){
        cart[i]=2
    }
    return cart;
}

const initialState = {
    weatherData:[],
    cartItems:getDefaultCart()
}


export const userApiSlice = createSlice({
    name:'frontendData',
    initialState,
    reducers:{
        setWeatherData:(state,action)=>{
            state.weatherData = [...new Set([...state.weatherData,...action.payload])]
        },
        addToCart:(state,action)=>{
            state.cartItems = {...state.cartItems,[action.payload]:state.cartItems[action.payload]+1}
        }

    }
})

export const {setWeatherData,addToCart} = userApiSlice.actions
export default userApiSlice.reducer