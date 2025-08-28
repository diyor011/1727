import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRu from "../public/locales/ru/translate.json";
import translationUz from "../public/locales/uz/translate.json";
import translationEn from "../public/locales/en/translate.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        ru: { translation: translationRu },
        uz: { translation: translationUz },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // react uchun kerak emas
    },
});

export default i18n;