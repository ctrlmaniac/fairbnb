import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  response?: string;
  login: boolean;
  loginError: boolean;
  registering: boolean;
  registerError: boolean;
}

const initialState: State = {
  response: undefined,
  login: false,
  loginError: false,
  registering: false,
  registerError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    loginStart: (state) => {
      state.login = true;
      state.response = undefined;
      state.loginError = false;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.loginError = false;
      state.login = false;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.loginError = true;
      state.login = false;
    },
    registerStart: (state) => {
      state.registering = true;
      state.response = undefined;
      state.registerError = false;
    },
    registerSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.registerError = false;
      state.registering = false;
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.registerError = true;
      state.registering = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
