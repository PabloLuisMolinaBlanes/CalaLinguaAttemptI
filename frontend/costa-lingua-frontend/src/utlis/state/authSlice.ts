import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: 'sessionState',
    initialState: "AAA",
    reducers: {
        authenticate: (state, action : PayloadAction<string>) => {state = action.payload},
        logout: (state) => {state = ""}
    },
})

export const {authenticate, logout} = authSlice.actions
export default authSlice.reducer;