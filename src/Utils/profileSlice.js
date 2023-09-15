import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        details: []
    },
    reducers: {
        profileData: (state, action) => {
            state.details.push(action.payload);
        }
    },
});

export const { profileData } = profileSlice.actions;
export default profileSlice.reducer;