import { createSlice } from "@reduxjs/toolkit";

const idToken = localStorage.getItem("token");
const userId = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: userId ? userId : null,
      token: idToken ? idToken : null,
      expiration: null,
    },
  },
  reducers: {
    resetUser(state) {
      state.user = {
        id: null,
        token: null,
        expiration: null,
      };
    },
    setUser(state, action) {
      state.user = {
        id: action.payload.id,
        token: action.payload.token,
        expiration: 36000000,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
