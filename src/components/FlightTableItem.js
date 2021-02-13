import React from "react";

export default class FlightTableItem extends React.Component {
  render() {
    const con = this.props.data.data.map((e) => {
      return (
        <div key={e.id} className="row">
          <div className="col">{e.airlines}</div>
          <div className="col">{e.aTime}</div>
          <div className="col"> {e.dTime} </div>
          <div className="col">{e.price}</div>
          <div className="col"></div>
        </div>
      );
    });
    return con;
  }
}
