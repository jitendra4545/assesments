import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/UserDetailsSlice";


export const store = configureStore({
   reducer: {
   app:userDetail
   },
});
