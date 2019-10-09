import { DefaultLocale } from "./constants.js";
import LocaleContext from "./LocaleContext.js";
import React from "react";

class LocaleWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: props.locale || DefaultLocale,
            setLocale: () => {}
        };
    }

    render() {
        return (
            <LocaleContext.Provider
                value={{
                    locale: this.state.locale,
                    setLocale: locale => {
                        this.setState({ locale });
                    }
                }}
            >
                {this.props.children}
            </LocaleContext.Provider>
        );
    }
}

export default LocaleWrapper;
