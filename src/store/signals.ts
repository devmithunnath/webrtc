import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "signals",
  initialState: [],
  reducers: {
    signalServer: (signals, action) => {
      signals.push()
    },
  },
})

export const { signalServer } = slice.actions
export default slice.reducer

// create as many as selectors (functions) to return the data you need