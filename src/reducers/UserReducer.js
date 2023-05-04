import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "userEdit",
  initialState: {
    value: 0,
  },
  reducers: {
    userEdit: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userEdit } = userReducer.actions;

export default userReducer.reducer;
