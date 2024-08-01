import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./components/budget/budgetSlice";

const store = configureStore({
  reducer: budgetReducer,
});

export default store;
