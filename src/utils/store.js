import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./slices/navigationSlice";

const store = configureStore({
    reducer : {
        navigation : navigationSlice
    }
})

export default store;