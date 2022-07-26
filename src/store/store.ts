/** @format */

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import flightsReduser from "./flights.reducer";

const rootReduser = combineReducers({ flights: flightsReduser });

export type RootState = ReturnType<typeof rootReduser>;
const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
