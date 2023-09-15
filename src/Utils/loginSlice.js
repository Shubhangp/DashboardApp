import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        details: []
    },
    reducers: {
        loginData: (state, action) => {
            state.details.push(action.payload);
        },
        clearData : (state) => {
            state.details.length = 0;
        }
    },
});

export const { loginData, clearData } = loginSlice.actions;
export default loginSlice.reducer;