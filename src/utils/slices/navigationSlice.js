import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name : 'navigationSlice',
    initialState : {
        isSidebarOpen : true,
        isSuggestionVisible : false
    },
    reducers : {
        toggleSidebar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar : (state) => {
            state.isSidebarOpen = false;
        },
        openSuggestion : (state) => {
            state.isSuggestionVisible = true;
        },
        closeSuggestion : (state) => {
            state.isSuggestionVisible = false;
        }
    }
})

export const {toggleSidebar, closeSidebar, openSuggestion, closeSuggestion} = navigationSlice.actions;
export default navigationSlice.reducer;