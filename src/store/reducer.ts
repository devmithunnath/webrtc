import { combineReducers } from "redux"
import signalReducer from "./slices/signal"
import signupReducer from "./slices/signup"
import webrtcReducer from "./slices/webrtc"

export default combineReducers({
  signalReducer,
  signupReducer,
  webrtcReducer,
})
