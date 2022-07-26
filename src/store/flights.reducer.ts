/** @format */

import {
  FlightsAction,
  FlightsActionTypes,
  FlightsState,
} from "./flights.type";

const initData: FlightsState = {
  flightsData: {departure:[],arrival:[]},
  direction: 'departure',
  value: "",
  date: "",
};

const flightsReduser = (
  state = initData,
  action: FlightsAction
): FlightsState => {
  switch (action.type) {
    case FlightsActionTypes.FLIGHTS_DATA_RECIEVED:
      return {
        ...state,
        flightsData: action.payload,
      };
    case FlightsActionTypes.FLIGHTS_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    case FlightsActionTypes.FLIGHTS_SEACH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case FlightsActionTypes.FLIGHTS_DATE:
      return {
        ...state,
        date: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReduser;
