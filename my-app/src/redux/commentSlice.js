import { createSlice } from "@reduxjs/toolkit";
export const commentSlice = createSlice({
    name:"comments",
    initialState:{
        commentsCount:0,
        commentsData:[]
    },
    reducers:{
        addNewComment : (state,action)=>{
            state.commentsCount++;
            state.commentsData.push(action.payload);
        }
    }
})
export const {addNewComment} = commentSlice.actions;
export default commentSlice.reducer;