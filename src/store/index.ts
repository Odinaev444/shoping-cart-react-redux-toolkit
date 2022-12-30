import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { productsApi } from '../services/ProductService'
import cartSlice from './reducers/cartSlice'
import favoriteSlice from './reducers/favoriteSlice'
import productSlice from './reducers/productSlice'


const rootReducer = combineReducers({
  cart: cartSlice,
  favorite: favoriteSlice,
  product: productSlice,
  [productsApi.reducerPath]: productsApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorite']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(productsApi.middleware),
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch