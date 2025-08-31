import { useTranslation } from "react-i18next";
import "./i18n"; // i18n ni import qilish shart!
import Abubakir from "./components/Abubakir";

const App = () => {
  const { t, i18n } = useTranslation();

  return (
 <div>
    <Abubakir />
 </div>
  );
};

export default App;
