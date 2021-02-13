import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCurrency } from "../redux/actions";

export default () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="currency">
      <select
        className="form-control"
        onChange={(event) => dispatch(getCurrency(event.target.value))}
      >
        <option value="USD">{t("USD")}</option>
        <option value="EUR">{t("EUR")}</option>
        <option value="RUB">{t("RUB")}</option>
      </select>
    </div>
  );
};
