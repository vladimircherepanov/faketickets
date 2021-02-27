import React from "react";
import { useTranslation } from "react-i18next";

import AirportSelection from "./components/AirportSelection";
//import FlightList from "./components/FlightList";
import FindButton from "./components/FindButton";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import "./styles.css";
import FlightTable from "./components/FlightTable";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />
      <div className="cont w-100">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <AirportSelection dir={"from"} placeholder={t("arrival")} />
          </div>
          <div className="col-sm-12 col-md-3">
            <AirportSelection dir={"to"} placeholder={t("destination")} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4  mt-2">
            <DatePicker />
          </div>
          <div className="col-sm-12 col-md-2 mt-2">
            <FindButton />
          </div>
        </div>
        <div>
          <FlightTable />
        </div>
      </div>
    </div>
  );
}
