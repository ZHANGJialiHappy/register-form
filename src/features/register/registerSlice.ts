import { createSlice } from "@reduxjs/toolkit";

export interface RegisterState {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState: RegisterState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {}
})

export default registerSlice.reducer


