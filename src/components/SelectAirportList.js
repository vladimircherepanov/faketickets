import React from "react";
import ReactCountryFlag from "react-country-flag";

class SelectAirportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }
  selectHandler = (event) => {
    event.preventDefault();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.value]: event.target.value }
    }));
    this.setState({ selected: true });
    console.log(this.props.options);

    console.log(event.currentTarget.getAttribute(""));

    this.props.handleAirportSelection(
      event.currentTarget.getAttribute("data-item"),
      event.currentTarget.getAttribute("data-details"),
      this.props.dir
    );
  };

  render() {
    if (this.props.options.length > 1) {
      return (
        <div className="airportList">
          {this.props.options.map((e, key) => {
            if (e.country) {
              return (
                <table className="table table-hover">
                  <tbody>
                    <tr
                      key={e.id}
                      onClick={this.selectHandler}
                      data-item={e.id}
                      data-details={e.name + "(" + e.id + ")"}
                    >
                      <td className="airport">
                        {e.name} ({e.id})
                      </td>
                      <td className="country">
                        {e.city.name}, {e.country.name}
                      </td>

                      <td className="flag">
                        <ReactCountryFlag
                          svg
                          countryCode={e.country.id}
                          style={{
                            fontSize: "1.3em"
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            } else {
              return (
                <table className="table table-hover">
                  <tbody>
                    <tr
                      key={e.id}
                      onClick={this.selectHandler}
                      data-item={e.id}
                      data-details={e.name + "(" + e.id + ")"}
                    >
                      <td className="airport">
                        {e.name} ({e.id})
                      </td>
                      <td className="country">
                        {e.city.name}, {e.city.country.name}
                      </td>

                      <td className="flag">
                        <ReactCountryFlag
                          svg
                          countryCode={e.city.country.code}
                          style={{
                            fontSize: "1.3em"
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            }
          })}
        </div>
      );
    } else {
      if (
        this.props.options.length === 1 &&
        this.props.inputs.length >= 1 &&
        this.state.selected === false
      )
        return (
          <table className="table">
            <tbody>
              <tr>
                <td>No suggestion</td>
              </tr>
            </tbody>
          </table>
        );
    }
    return null;
  }
}

export default SelectAirportList;
