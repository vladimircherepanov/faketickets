import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export default () => {
  const flightData = useSelector((state) => state.flightData.flightData);
  const loading = useSelector((state) => state.app.loading);
  const columns = [
    {
      Header: "Airlines",
      accessor: "airlines"
    },
    {
      Header: "Flight No",
      accessor: "route.[flight_no]"
    },

    {
      Header: "aTime",
      accessor: "aTime"
    },
    {
      Header: "dTime",
      accessor: "dTime"
    },
    {
      Header: "Duration",
      accessor: "fly_duration"
    },
    {
      Header: "Price",
      accessor: "price"
    }
  ];

  if (loading) {
    return <Loader />;
  }

  console.log("Data List", flightData);
  if (flightData.data === undefined) {
    return <div></div>;
  } else return <ReactTable columns={columns} data={flightData.data} />;
};
