import { combineReducers } from "redux";

import HotelsListReducer from "./HotelsListReducer";
import HotelPageReducer from "./HotelPageReducer";

const rootReducer = combineReducers({
	HotelsListReducer,
	HotelPageReducer
});


export default rootReducer;
