import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: 'sessionState',
    initialState: "",
    reducers: {
        authenticateUser: (state, action : PayloadAction<string>) => {return action.payload},
        logout: (state) => {return ""}
    },
})

export const {authenticateUser, logout} = authSlice.actions
export default authSlice.reducer;