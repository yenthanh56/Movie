import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

export const ModalTrailer = createSlice({
    name: "ModalTrailer",
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        remove: (state) => {
            state.value = null;
        },
    },
});

export const {set, remove } = ModalTrailer.actions;
export default ModalTrailer.reducer;