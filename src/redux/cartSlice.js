import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex === -1) {

        state.items.push(action.payload);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      } else {

        console.log('Item is already in the cart');
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index > -1) {
        state.items.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
