// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     return response.data
// }) 

// const usersSlice = createSlice({
//     name : "usersSlice",
//     initialState : {
//         users : [],
//         loading : "idel",
//         error : ""
//     },
//     reducers : {

//     },
//     extraReducers : (builder)=>{
//         builder.addCase(fetchUsers.pending, (state)=>{
//             state.status = "loading"
//         })
//         builder.addCase(fetchUsers.fulfilled, (state,action)=>{
//             state.status = "succeeded"
//             state.users = action.payload
//         })
//         builder.addCase(fetchUsers.rejected, (state,action)=>{
//             state.status = "failed"
//             state.error = action.error.message
//         })
//     }
// })

// export default usersSlice;
// // export {fetchUsers} 