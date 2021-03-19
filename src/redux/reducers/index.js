import { combineReducers } from "redux"
import Profile from "./login/index"
const appReducer = combineReducers({
    Profile,
})
const rootReducer = (state, action) => {
    console.log("COMBINE REDUCERS", state, "ACTION", action)
    return appReducer(state, action)
}
export default rootReducer;

