import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { filterSlice } from "./filterStore";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      filter: filterSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
