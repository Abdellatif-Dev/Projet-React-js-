import { configureStore } from '@reduxjs/toolkit'
import TSlice from './creteSlice'
export const storetool = configureStore({
  reducer: {
    Tache:TSlice.reducer
  },
})