/** @format */

export interface FlightsState {
  flightsData: any;
  direction: string;
  value: string;
  date: string;
}

export enum FlightsActionTypes {
  FLIGHTS_DATA_RECIEVED = "FLIGHTS_DATA_RECIEVED",
  FLIGHTS_DIRECTION = "FLIGHTS_DIRECTION",
  FLIGHTS_SEACH_VALUE = "FLIGHTS_SEACH_VALUE",
  FLIGHTS_DATE = "FLIGHTS_DATE",
}

interface FlightsDataRecieved {
  type: FlightsActionTypes.FLIGHTS_DATA_RECIEVED;
  payload: any;
}
interface FlightsDirection {
  type: FlightsActionTypes.FLIGHTS_DIRECTION;
  payload: string;
}
interface FlightsSeachValue {
  type: FlightsActionTypes.FLIGHTS_SEACH_VALUE;
  payload: string;
}
interface FlightsDate {
  type: FlightsActionTypes.FLIGHTS_DATE;
  payload: string;
}

export type FlightsAction =
  | FlightsDataRecieved
  | FlightsDirection
  | FlightsSeachValue
  | FlightsDate;
