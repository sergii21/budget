import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget: (state) => (state.budget += 1),
  },
});

export const { setBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
