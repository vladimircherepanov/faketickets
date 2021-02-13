import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { flightDataReducer } from "./flightDataReducer";
import { inputsReducer } from "./inputsReducer";

export const rootReducer = combineReducers({
  flightData: flightDataReducer,
  inputs: inputsReducer,
  app: appReducer
});
