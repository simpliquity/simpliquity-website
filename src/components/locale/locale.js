import _ from "underscore";
import { DefaultLocale } from "./constants.js";
import en from "./en.i18n.js";
import de from "./de.i18n.js";
import fr from "./fr.i18n.js";

const translations = { en, de, fr };

const replaceOptions = ({ word, options }) => {
    if (_.isEmpty(options)) return word;
    let _word = word;
    _.each(options, (value, key) => {
        _word = _word.replace(`{${key}}`, value);
    });
    return _word;
};

const getTranslation = (word, _locale) => {
    if (!word) return "";
    const locale = _locale || DefaultLocale;
    const localeTranslations = translations[locale] || {};
    return localeTranslations[word] || word;
};

const i18n = (word, options, _locale) => {
    return replaceOptions({ word: getTranslation(word, _locale), options });
};

export default i18n;
export { i18n, getTranslation };
