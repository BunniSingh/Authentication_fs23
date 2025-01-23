import { createSlice } from "@reduxjs/toolkit";

const initData = {
    userData: {

    },
    isLogin: false
}

const loginSlice = createSlice({
    name: 'LOGIN',
    initialState: initData,
    reducers: {
        setIsLoginStatus (state, action) {
            state.isLogin = action.payload;
        },
        setUserData (state, action) {
            state.userData = action.payload;
        }
    }
})

export const {setIsLoginStatus, setUserData} = loginSlice.actions;
export default loginSlice.reducer;