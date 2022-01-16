import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "signup",
  initialState: {},
  reducers: {
    validateUserDetails: (signup, action) => {},
    storeUserDetails: (signup, action) => {},
  },
})

export const { validateUserDetails, storeUserDetails } = slice.actions

export default slice.reducer
