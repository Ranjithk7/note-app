import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/NoteSlice";

const store = configureStore({
    reducer: {
        notes: noteSlice.reducer,
    }
})

export default store;