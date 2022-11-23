import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
        }
    }
})

export default loginSlice.reducer


