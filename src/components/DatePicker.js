import React from "react";

import { connect } from "react-redux";
import { getDateOneWay, getDates } from "../redux/actions";

import Calendar from "./Calendar";

import { DateUtils } from "react-day-picker";

import { formatDate } from "./utils/formatDate";

import { withTranslation } from "react-i18next";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calendar_open: false };
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.submitHandle = this.submitHandle.bind(this);

    this.state = this.getInitialState();
  }

  getInitialState() {
    const { t } = this.props;
    return {
      from: undefined,
      to: undefined,
      oneWay: false,
      disabled: false,
      dateToPlaceholder: undefined
    };
  }

  toogleCalendar = () => {
    this.setState({ calendar_open: !this.state.calendar_open });
  };

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  handleResetClick = () => {
    this.setState(this.getInitialState());
  };

  oneWayHandle = () => {
    const { t } = this.props;
    const dateTo = t("oneWay");
    this.setState({
      to: "",
      oneWay: true,
      disabled: true,
      dateToPlaceholder: dateTo
    });
    this.props.getDateOneWay(this.state.from);
    this.toogleCalendar();
  };

  submitHandle = () => {
    this.toogleCalendar();
    this.setState({ disabled: false });
    this.props.getDates(this.state.to, this.state.from);
  };

  showCalendar = () => {
    if (this.state.calendar_open === true) {
      return (
        <Calendar
          from={this.state.from}
          to={this.state.to}
          oneWay={this.state.oneWay}
          handleResetClick={this.handleResetClick}
          handleDayClick={this.handleDayClick}
          oneWayHandle={this.oneWayHandle}
          submitHandle={this.submitHandle}
        />
      );
    } else {
      return;
    }
  };

  fromDate = () => {
    if (this.state.from) {
      return this.state.from;
    } else {
      return "";
    }
  };

  toDate = () => {
    if (this.state.to) {
      return this.state.to;
    } else {
      return "";
    }
  };

  getFormattedDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = (1 + date.getMonth()).toString();
      const formatted_month = month.length > 1 ? month : "0" + month;
      const day = date.getDate().toString();
      const formatted_day = day.length > 1 ? day : "0" + day;
      return formatted_month + "/" + formatted_day + "/" + year;
    }
  };

  inputsView = () => {
    const { t } = this.props;

    return (
      <div className="row">
        <div className="col col-md-6">
          <button className="form-control" onClick={this.toogleCalendar}>
            {formatDate(this.fromDate()) || formatDate(new Date())}
          </button>
          {this.showCalendar()}
        </div>
        <div className="col col-md-6">
          <button
            className="form-control"
            disabled={this.state.disabled}
            onClick={this.toogleCalendar}
          >
            {formatDate(this.toDate()) ||
              this.state.dateToPlaceholder ||
              t("returnDate")}
          </button>
          {!this.showCalendar()}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.inputsView()}</div>;
  }
}

const mapDispatchToProps = {
  getDateOneWay: getDateOneWay,
  getDates: getDates
};

export default connect(null, mapDispatchToProps)(withTranslation()(DatePicker));
