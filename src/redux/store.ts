import { configureStore } from "@reduxjs/toolkit"
import clockReducer from "../slices/clockSlice"

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
