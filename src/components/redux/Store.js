import { configureStore } from "@reduxjs/toolkit";

import ModalTrailer from "./ModalTrailer/ModalTrailer";

export const store = configureStore({
    reducer: {
        Modal: ModalTrailer,
    },
});