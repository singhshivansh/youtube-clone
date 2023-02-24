import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
    name : 'searchCacheSlice',
    initialState : {},
    reducers : {
        addSearchObj : (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
})

export const {addSearchObj} = searchCacheSlice.actions;
export default searchCacheSlice.reducer;