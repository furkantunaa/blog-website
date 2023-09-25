import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.userInfo = action;
    },
  },
});

export const { setState } = userSlice.actions;

export default userSlice.reducer;
