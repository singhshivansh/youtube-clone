import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./slices/navigationSlice";
import searchCacheSlice from "./slices/searchCacheSlice";

const store = configureStore({
    reducer : {
        navigation : navigationSlice,
        searchCache : searchCacheSlice
    }
})

export default store;