import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../styles.css";

import { withTranslation } from "react-i18next";

export class Calendar extends React.Component {
  static defaultProps = {
    numberOfMonths: 1
  };

  oneWayButton = () => {
    const { t } = this.props;

    if (this.props.from && !this.props.to && !this.props.oneWay) {
      return (
        <button className="btn btn-warning" onClick={this.props.oneWayHandle}>
          {t("selectOneWayButton")} {this.props.from.toLocaleDateString()}
        </button>
      );
    }
  };

  submitButton = () => {
    const { t } = this.props;

    if (this.props.from && this.props.to) {
      return (
        <button className="btn btn-warning" onClick={this.props.submitHandle}>
          {t("submit")}
        </button>
      );
    }
  };

  render() {
    const from = this.props.from;
    const to = this.props.to;
    const oneWay = this.props.oneWay;
    const { t } = this.props;

    console.log(this.props);

    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <div className="container">
          <div className="CalendarTitle">
            {!from && !to && <h4>{t("selectArrivalDate")}</h4>}
            {from && !to && !oneWay && <h4>{t("selectReturnDate")}</h4>}
            {from && to && (
              <h4>
                {from.toLocaleDateString()} - {to.toLocaleDateString()}{" "}
              </h4>
            )}
            {from && !to && oneWay && (
              <h6>
                {t("selectOneWay")} - {from.toLocaleDateString()}{" "}
              </h6>
            )}
            {from && to && (
              <div>
                <button
                  className="btn btn-danger"
                  onClick={this.props.handleResetClick}
                >
                  {t("reset")}
                </button>
                <button
                  type="button"
                  className="button btn-close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            {from && oneWay && (
              <button
                className="btn btn-danger"
                onClick={this.props.handleResetClick}
              >
                Reset
              </button>
            )}
          </div>

          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.props.handleDayClick}
            disabledDays={[{ before: new Date() }]}
          />
          <div> {this.oneWayButton()} </div>
          <div> {this.submitButton()} </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Calendar);
