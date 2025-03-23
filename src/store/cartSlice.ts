import { createSlice } from "@reduxjs/toolkit";
type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
