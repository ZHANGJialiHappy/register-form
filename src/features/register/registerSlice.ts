import { createSlice } from "@reduxjs/toolkit";

export interface RegisterState {
    userName: string;
    email: string;
    password: string;
}

const initialState: RegisterState = {
    userName: "",
    email: "",
    password: "",
}

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {}
})

export default registerSlice.reducer


