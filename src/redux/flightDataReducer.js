import { LOAD_FLIGHT_DATA } from "../redux/types";

const initialState = {
  flightData: []
};

export const flightDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FLIGHT_DATA:
      return {
        ...state,
        flightData: action.payload
      };

    default:
      return state;
  }
};
