import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
    email: string;
    password: string;
}

const initialState: LoginState = {
    email: "",
    password: "",
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {}
})

export default loginSlice.reducer

