import { createSlice } from "@reduxjs/toolkit";



export const userDetail=createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:false
    },
})


export default userDetail.reducer