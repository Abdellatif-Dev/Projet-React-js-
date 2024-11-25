import { configureStore } from '@reduxjs/toolkit'
import rectt from './createslice'
export const toolk=configureStore({
    reducer: {
        Table:rectt.reducer
      },
    })
