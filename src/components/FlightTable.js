import React from "react";
import "react-table-6/react-table.css";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import FlightTableItem from "./FlightTableItem";

export default () => {
  const flightData = useSelector((state) => state.flightData.flightData);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  console.log("FlightData", flightData);
  if (flightData.data === undefined) {
    return <div>No data</div>;
  } else return <FlightTableItem data={flightData} />;
};
