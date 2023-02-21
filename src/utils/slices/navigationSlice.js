import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name : 'navigationSlice',
    initialState : {
        isSidebarOpen : true
    },
    reducers : {
        toggleSidebar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})

export const {toggleSidebar} = navigationSlice.actions;
export default navigationSlice.reducer;