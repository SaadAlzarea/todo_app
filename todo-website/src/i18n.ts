import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataAR from "./locale/ar/translation.json";
import dataEN from "./locale/en/translation.json";

const resources = {
	en: {
		translation: dataEN,
	},
	ar: {
		translation: dataAR,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
