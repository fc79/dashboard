import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    signUpData:null,
    loginData:null,
    firstname:null,
    lastname:null,
    mobile:null,
    token:null,
    loginButtonIsClicked: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        
            setToken(state){
                const token = localStorage.getItem('token');
                if (token) {
                    state.isAuthenticated = true;
                    console.log("kfcdsjfioerf");
                    
                }
            }
            ,
        signUp(state:any, action:any) {
            state.signUpData = action.payload.signUpData;

            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.mobile = action.payload.mobile           
            localStorage.setItem('token', action.payload.token);
         
       },
       login(state:any, action:any) {
         state.loginData = action.payload.loginData;
         state.firstname = action.payload.firstname
         state.lastname = action.payload.lastname
         state.mobile = action.payload.mobile
         localStorage.setItem('token', action.payload.token);


        },
        logout(state:any) {
         state.isAuthenticated = false;
         localStorage.removeItem('token');
}
    }
});
export default authSlice;