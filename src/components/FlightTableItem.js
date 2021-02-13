import React from "react";
import { convertTimeStamp } from "./utils/convertTimeStamp";

export default class FlightTableItem extends React.Component {
  render() {
    const con = this.props.data.data.map((e) => {
      return (
        <div key={e.id} className="row">
          <div className="col">{e.airlines}</div>
          <div className="col">{convertTimeStamp(e.aTime)}</div>
          <div className="col">{convertTimeStamp(e.dTime)} </div>
          <div className="col">{e.price}</div>
          <div className="col">
            <button className="btn btn-warning">SELECT</button>
          </div>
        </div>
      );
    });
    return con;
  }
}
