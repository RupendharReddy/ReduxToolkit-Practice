import { createSlice } from "@reduxjs/toolkit";

export const subscriberSlice = createSlice({
    name:"Subscriber",
    initialState:{
        subscriberName:[]
    },
    reducers:{
        newSubscriber:(state,action)=>{
            state.subscriberName = [...state.subscriberName, action.payload]
        }
    }
})
export const {newSubscriber} = subscriberSlice.actions;
export default subscriberSlice.reducer;