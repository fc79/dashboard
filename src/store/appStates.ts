import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    drawerIsOpen: false
}

const appStatesSlice = createSlice({
    name: 'appStates',
    initialState: initialAuthState,
    reducers: {
        drawer:(state:any)=>{
            state.drawerIsOpen = !state.drawerIsOpen;
         
        }
}
})
export default appStatesSlice;