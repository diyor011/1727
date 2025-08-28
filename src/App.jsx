import { useTranslation } from "react-i18next";
import "./i18n"; // i18n ni import qilish shart!
import Abubakir from "./components/Abubakir";

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
    <div className="flex gap-3 bg-gray-200 p-3 ">
      {/* <h3>{t("howItWorks.steps.select.title")}</h3>
      <h3>{t("hero.title")}</h3>
      <h3>{t("hero.subtitle")}</h3> */}

      {/* Tilni o‘zgartirish tugmalari */}
      <button className="bg-black text-white rounded" onClick={() => i18n.changeLanguage("uz")}>O‘zbekcha</button>
      <button className="bg-black text-white rounded" onClick={() => i18n.changeLanguage("en")}>English</button>
      <button className="bg-black text-white rounded" onClick={() => i18n.changeLanguage("ru")}>Русский</button>
      
    </div>
    <Abubakir />
    </div>
  );
};

export default App;
