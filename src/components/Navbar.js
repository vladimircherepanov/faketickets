import CurrencyPicker from "../components/CurrencyPicker";
import LanguageBar from "../components/LanguageBar";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="navbar-brand" href="#">
        {t("title_text")}
      </h1>
      <div className="row">
        <div className="col">
          <CurrencyPicker />
        </div>
        <div className="col">
          <LanguageBar />
        </div>
      </div>
    </nav>
  );
}
