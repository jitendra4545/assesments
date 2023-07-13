import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const addUser = createAsyncThunk("addUser", async (payload) => {

    const res = await fetch("http://localhost:8100/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    );
    const result = await res.json();
    return result;

})



export const getUserData = createAsyncThunk(
    "getUsers",
    async () => {
        try {
            const res = await fetch("http://localhost:8100/users");
            const result = await res.json();
            console.log("res", result)
            return result;
        } catch (err) {
            return err
        }
    }
);


export const getSingleUser = createAsyncThunk("singleUser", async (id) => {
    try {
        const res = await fetch(`http://localhost:8100/users/${id}`)
        let result = await res.json()

        console.log(result)
        return result
    } catch (err) {
        return err
    }
})


// export const deleteUser=createAsyncThunk("deleteuser",async(id)=>{
//     try{
//       const res=await fetch(`http://localhost:8100/users/delete/${id}`,{
//         method:"DELETE"
//       })
//       const result=await res.json()
//       console.log(result)
//       return result
//     }catch(err){
// return err
//     }
// })

export const deleteUser = createAsyncThunk(
    "deleteUser",
    async ({id}) => {
        try {
            const res = await fetch(
                `http://localhost:8100/users/${id}`,
                {
                    method: "DELETE",
                }
            );
            const result = await res.json();
            return result;
        } catch (err) {
            console.log(err);
            return err
        }
    }
);


export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ id, name, email, phone }) => {

        console.log("data", id, name, email, phone)
        try {
            const res = await fetch(
                `http://localhost:8100/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, phone }),
                }
            );
            const result = await res.json();
            return result;
        } catch (err) {
            return err;
        }
    }
);

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [addUser.pending]: (state) => {
            state.loading = true
        },
        [addUser.fulfilled]: (state, action) => {
            console.log(action)
            state.loading = false
            state.users.push(action.payload)
        },
        [addUser.rejected]: (state) => {
            state.error = true
        },
        [getUserData.pending]: (state) => {
            state.loading = true
        },
        [getUserData.fulfilled]: (state, action) => {
            console.log("getData", action)
            state.loading = false
            state.users = action.payload
        },
        [getUserData.rejected]: (state) => {
            state.error = true
        },

        [getSingleUser.pending]: (state) => {
            state.loading = true
        },
        [getSingleUser.fulfilled]: (state, action) => {
            console.log("getData", action)
            state.loading = false
            state.users = action.payload
        },
        [getSingleUser.rejected]: (state) => {
            state.error = true
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            console.log("delete",action)
            state.loading = false;
            const { id } = action.payload;
            
            if (id) {
                state.users = state.users.filter((el) => el.id !== id);
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            console.log("updateData", action)
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;

        },

    }
})


export default userDetail.reducer