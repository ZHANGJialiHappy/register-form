import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisterState {
    userName: string;
    email: string;
    password: string;
}

const initialState = {
    userName: "",
    email: "",
    password: "",
};

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<RegisterState>) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    }
})

export const {register} = registerSlice.actions
export default registerSlice.reducer


