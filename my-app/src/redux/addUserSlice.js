import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const addUser = createAsyncThunk("Adding new user", async (users)=>{
        const response = await axios.post("https://reqres.in/api/users",users)
        return response;
    }
) 
export const fetchUsers = createAsyncThunk("Fetching users", async ()=> {
        const response = await axios.get("https://reqres.in/api/users")
        return response.data
    }
)

const addUserSlice = createSlice({
    name : "Addnewuser",
    initialState : {
        users : [],
        status : "idel",
        error : "",
        loading : false

    },
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(addUser.pending, (state)=>{

        })
        .addCase(addUser.fulfilled, (state, action)=>{
            state.users.push(action.payload)
        })
        .addCase(addUser.rejected, (state,action)=>{
            state.error = action.payload;
        })
    }

})