import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  filter: string;
  filterBrand: string;
  filterFeature: string;
  search: string;
  sliceData: number;
  productID: number;
  product: Record<string, any>;
  products: any;
}

const initialState: CounterState = {
  value: 0,
  filter: "All",
  filterBrand: "All",
  filterFeature: "All",
  search: "",
  sliceData: 5,
  productID: 1,
  product: {},
  products: JSON.parse(localStorage.getItem("products-all") || `{}`) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setFilterBrand: (state, action: PayloadAction<string>) => {
      state.filterBrand = action.payload;
    },
    setFilterFeature: (state, action: PayloadAction<string>) => {
      state.filterFeature = action.payload;
    },
    serSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setProducts: (state, action: PayloadAction<Object>) => {
      state.product = action.payload;
      console.log(state.product);
      localStorage.setItem("product", JSON.stringify(action.payload));
    },
    setProductsAll: (state, action: PayloadAction) => {
      state.products = action.payload;
      localStorage.setItem("products-all", JSON.stringify(state.products));
    },
  },
});

export const {
  setFilter,
  setFilterBrand,
  setFilterFeature,
  serSearch,
  setProducts,
  setProductsAll,
} = counterSlice.actions;

export default counterSlice.reducer;
