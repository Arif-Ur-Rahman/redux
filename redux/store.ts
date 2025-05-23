// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer types for use throughout app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
