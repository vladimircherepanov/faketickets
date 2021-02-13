import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export default function LanguageBar() {
  const { i18n } = useTranslation(["translation", "text"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  if (i18n.language === "en") {
    return (
      <div className="flag">
        <ReactCountryFlag
          onClick={() => changeLanguage("ru")}
          countryCode="RU"
          svg
          style={{
            width: "2em",
            height: "2em"
          }}
          title="RU"
        />
      </div>
    );
  } else {
    return (
      <div>
        <ReactCountryFlag
          className="flag"
          onClick={() => changeLanguage("en")}
          countryCode="GB"
          svg
          style={{
            width: "2em",
            height: "2em"
          }}
          title="EN"
        />
      </div>
    );
  }
}
