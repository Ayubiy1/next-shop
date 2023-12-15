import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  filter: string;
}

const initialState: CounterState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.filter += action.payload;
    },
  },
});
