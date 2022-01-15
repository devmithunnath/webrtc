import { combineReducers } from "redux"
import signalsReducer from "./signals"

export default combineReducers({
    signals: signalsReducer,
    //more slices
})