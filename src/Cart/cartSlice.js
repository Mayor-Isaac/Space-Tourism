import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // payload = new Item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCurrentQuantityByName = (name) => (state) =>
  state.cart.cart.find((item) => item.name === name)?.quantity ?? 0;
