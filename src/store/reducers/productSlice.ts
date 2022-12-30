import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../models/Product';


const initialState = [] as Product[]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product[]>) {
      action.payload.map(item => state.push(item))
    },
  }
})

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;