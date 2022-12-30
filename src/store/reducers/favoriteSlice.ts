import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Favorite } from '../../models/Favorite';
import { Product } from '../../models/Product';


const initialState: Favorite = {
  items: []
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemToFavorite(state, action: PayloadAction<Product>) {
      const itemExist = state.items.find(item => item.id === action.payload.id);
      if (!itemExist) state.items.push(action.payload);
    },
    removeItemFromFavorite(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      if (itemIndex !== -1) state.items.splice(itemIndex, 1);
    },
  }
})

export const { addItemToFavorite, removeItemFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;