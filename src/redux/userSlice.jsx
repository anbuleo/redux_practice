import { configureStore, createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:[
        {
            name:'anbu',
            email:'anbu@gmail.com'
        }
    ],
    reducers:{
        add:(state,action)=>{
            state.user.push(action.payload)
        }
    
    }
})

export const {add} = userSlice.actions
export default userSlice.reducer
