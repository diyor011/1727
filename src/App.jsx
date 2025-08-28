import { useTranslation } from "react-i18next";
import "./i18n"; // i18n ni import qilish shart!

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h3>{t("howItWorks.steps.select.title")}</h3>
      <h3>{t("hero.title")}</h3>
      <h3>{t("hero.subtitle")}</h3>
      <h3>{t("howItWorks.steps.enjoy.desc")}</h3>

      {/* Tilni o‘zgartirish tugmalari */}
      <button onClick={() => i18n.changeLanguage("uz")}>O‘zbekcha</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("ru")}>Русский</button>
    </div>
  );
};

export default App;
