import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';


interface PayloadProps {
  product: Product;
  quantity: number;
}

const initialState: Cart = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<PayloadProps>) {
      const itemExist = state.items.find(item => item.product.id === action.payload.product.id)
      if (!itemExist) {
        state.items.push({
          product: action.payload.product,
          quantity: action.payload.quantity
        })
        state.totalQuantity = state.totalQuantity + action.payload.quantity;
      }
    },
    removeItemFromCart(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload.id)
      if (itemIndex !== -1) {
        const removedItemQuantity = state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
        state.totalQuantity = state.totalQuantity - removedItemQuantity
      }
    },
  }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;