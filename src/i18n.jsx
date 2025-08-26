import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector) // brauzer tilini aniqlaydi
    .use(initReactI18next)
    .init({
        fallbackLng: "en", // agar til topilmasa
        debug: true,
        interpolation: {
            escapeValue: false, // React uchun kerak emas
        },
        resources: {
            en: {
                translation: require("../public/locales/en/translation.json"),
            },
            uz: {
                translation: require("../public/locales/uz/translation.json"),
            },
        },
    });

export default i18n;
