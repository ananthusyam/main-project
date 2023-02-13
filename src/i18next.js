import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./lng/EN.json"
import TR from "./lng/TR.json"
i18next.use(initReactI18next).init({
    resources: {
        EN: {
            translation: EN
        },
        TR: {
            translation: TR
        },
    },
    lng: localStorage.getItem("lng") || "EN",
});

export default i18next;