import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../redux/store"

export interface ClockState {
  value: number;
}
const timeStamp = new Date();
const initialState: ClockState = {
  value: timeStamp.getTime(),
}

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTime } = clockSlice.actions
export const selectCount = (state: RootState) => state.clock.value
export default clockSlice.reducer