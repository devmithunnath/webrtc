import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "webrtc",
  initialState: {},
  reducers: {
    initiateConnection: ()=>{},
    createLocalDescription: (ice, action) => {},
    setLocalDescription: (ice, action) => {},
    setRemoteDescription: (ice, action) => {},
    // Not finalized - this can change 
  },
})

export const {
  createLocalDescription,
  setLocalDescription,
  setRemoteDescription,
} = slice.actions

export default slice.reducer
