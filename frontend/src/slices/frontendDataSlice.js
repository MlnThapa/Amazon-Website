import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData:[],
}

export const userApiSlice = createSlice({
    name:'frontendData',
    initialState,
    reducers:{
        setWeatherData:(state,action)=>{
            state.weatherData = [...new Set([...state.weatherData,...action.payload])]
        }
    }
})

export const {setWeatherData} = userApiSlice.actions
export default userApiSlice.reducer