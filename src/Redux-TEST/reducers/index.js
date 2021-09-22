import { combineReducers } from "redux";
import reqsReducer from './reqsReducer'

export default combineReducers({
    requirements: reqsReducer,
})
