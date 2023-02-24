import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name : 'navigationSlice',
    initialState : {
        isSidebarOpen : true
    },
    reducers : {
        toggleSidebar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar : (state) => {
            state.isSidebarOpen = false;
        }
    }
})

export const {toggleSidebar, closeSidebar} = navigationSlice.actions;
export default navigationSlice.reducer;