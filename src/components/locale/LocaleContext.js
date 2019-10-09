import { DefaultLocale } from "./constants.js";
import React from "react";

const LocaleContext = React.createContext({
    locale: DefaultLocale,
    setLocale: () => {}
});

export default LocaleContext;
export { LocaleContext };
