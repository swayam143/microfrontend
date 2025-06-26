import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "A",
};

export const userSlice = createSlice({
  name: "ShubhamUser",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUserName } = userSlice.actions;

export default userSlice.reducer;
