import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/UserReducer";

const store = configureStore({
  reducer: { userReducer: userReducer },
});

export default store;
