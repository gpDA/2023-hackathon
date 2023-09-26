import { configureStore } from '@reduxjs/toolkit'
import graphReducer from './Slice/graphSlice'

export const store = configureStore({
  reducer: {
    graph: graphReducer,
  },
})