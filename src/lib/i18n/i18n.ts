import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./locals/en/translation.json";
import translationPersian from "./locals/fa/translation.json";

const resources = {
    en: {
        home: translationEnglish,
      
    },
    
    fa: {
        home: translationPersian,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"fa", //default language
});

export default i18next;