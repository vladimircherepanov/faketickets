import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { loadFlightData } from "../redux/actions";

export default () => {
  const fromAirport = useSelector((state) => state.inputs.from);
  const toAirport = useSelector((state) => state.inputs.to);
  const arrivalDate = useSelector((state) => state.inputs.date_from);
  const returnDate = useSelector((state) => state.inputs.date_to);
  const currency = useSelector((state) => state.inputs.currency);

  const loading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const current_locale = i18n.language;

  if (loading) {
    return (
      <button className="btn btn-warning w-100" type="disabled">
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-warning w-100"
        onClick={() =>
          dispatch(
            loadFlightData(
              fromAirport,
              toAirport,
              arrivalDate,
              returnDate,
              current_locale,
              currency
            )
          )
        }
      >
        {t("find_button")}
      </button>
    );
  }
};
