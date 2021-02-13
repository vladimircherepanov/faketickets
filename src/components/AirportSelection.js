import React from "react";

import SelectAirportList from "./SelectAirportList";

import { connect } from "react-redux";
import { fromAirport, toAirport } from "../redux/actions";

import i18n from "../i18n";

class AirportSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          value: 0,
          text: ""
        }
      ],

      from: "",
      to: "",
      descrFrom: "",
      descrTo: "",
      selected: false
    };
  }

  async getAirportData(name) {
    console.log(name);
    const current_locale = i18n.language;
    const response = await fetch(
      "https://api.skypicker.com/locations?term=" +
        name +
        "&locale=" +
        current_locale +
        "-" +
        current_locale.toUpperCase() +
        "&location_types=airport&limit=10&active_only=true&sort=name"
    );
    const json = await response.json();

    if (json.locations.length > 0) {
      this.setState({ options: json.locations });
    } else {
      this.setState({ options: [{ value: 0, text: "" }] }); // Ощищаем стейт
    }
  }

  changeInputHandler = (event) => {
    if (this.props.dir === "from") {
      this.setState({ descrFrom: event.target.value });
    } else {
      this.setState({ descrTo: event.target.value });
    }
    this.getAirportData(event.target.value);
  };

  handleAirportSelection = (code, text, direction) => {
    if (direction === "from") {
      this.setState(
        { from: code, descrFrom: text, options: [{ value: 0, text: "" }] },

        () => {
          console.log(this.state.from, this.state.descrFrom, direction);

          this.props.fromAirport(this.state.from);
        }
      );
    } else {
      this.setState(
        { to: code, descrTo: text, options: [{ value: 0, text: "" }] },

        () => {
          console.log(this.state.to, this.state.descrTo, direction);

          this.props.toAirport(this.state.to);
        }
      );
    }
  };

  getValueByDir = () => {
    if (this.props.dir === "from") {
      return this.state.descrFrom;
    } else {
      return this.state.descrTo;
    }
  };

  render() {
    return (
      <div>
        <div className="form-group mt-2">
          <input
            name={this.props.dir}
            type="text"
            className="form-control"
            aria-describedby="airport"
            placeholder={this.props.placeholder}
            onChange={this.changeInputHandler}
            value={this.getValueByDir()}
          />
        </div>
        <SelectAirportList
          dir={this.props.dir}
          options={this.state.options}
          handleAirportSelection={this.handleAirportSelection}
          inputs={this.getValueByDir()}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fromAirport: fromAirport,
  toAirport: toAirport
};

export default connect(null, mapDispatchToProps)(AirportSelection);
