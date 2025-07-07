import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const addUser = createAsyncThunk("users/AddNewUser", async (users)=>{
        const response = await axios.post("https://reqres.in/api/users",users,{
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
        return response.data;
    }
) 
export const fetchUsers = createAsyncThunk("users/Fetching", async ()=> {
        const response = await axios.get("https://reqres.in/api/users",{headers: {
                "x-api-key": "reqres-free-v1"
            }
        }
        )
        return response.data.data
    }
)

const userSlice = createSlice({
    name : "users",
    initialState : {
        users : [],
        status : "idel",
        error : "",
        loading : false

    },
    reducers:{},
    extraReducers : (builder) => {
        builder
        // fetchUsers AsyncThunk
        .addCase(fetchUsers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
        
        // addusers AsyncThunk
        .addCase(addUser.pending, (state)=>{
            state.loading = true
        })
        .addCase(addUser.fulfilled, (state, action)=>{
            state.users.push(action.payload)
            state.loading = false
        })
        .addCase(addUser.rejected, (state,action)=>{
            state.error = action.error.message;
            state.loading = false
        })
    }

})

export default userSlice.reducer