import _ from "underscore";
import LocaleContext from "./locale/LocaleContext.js";
import { Locales } from "./locale/constants.js";
import queryString from "query-string";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    activeItem: {
        color: theme.palette.primary.main
    },
    inactiveItem: {
        color: "#aaa"
    }
}));

const LocaleItem = ({ active, locale, setLocale, theme }) => {
    const classes = useStyles();
    return (
        <div
            href="#"
            onClick={setLocale}
            className={active ? classes.activeItem : classes.inactiveItem}
            style={{
                cursor: "pointer",
                padding: "0 5px",
                textDecoration: "none"
            }}
        >
            {locale.toUpperCase()}
        </div>
    );
};

class LocaleChecker extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        if (!parsed.lang) return;
        if (this.props.locale !== parsed.lang) {
            this.props.setLocale(parsed.lang);
        }
    }

    render() {
        return null;
    }
}

const LocaleSelector = props => {
    return (
        <LocaleContext.Consumer>
            {({ locale, setLocale }) => (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "no-wrap",
                        justifyContent: "flex-end",
                        fontSize: "0.9rem"
                    }}
                >
                    <LocaleChecker locale={locale} setLocale={setLocale} />
                    {_.map(Locales, itemLocale => (
                        <LocaleItem
                            key={itemLocale}
                            active={itemLocale === locale}
                            locale={itemLocale}
                            setLocale={e => {
                                e && e.preventDefault && e.preventDefault();
                                setLocale(itemLocale);
                            }}
                            theme={props.theme}
                        />
                    ))}
                </div>
            )}
        </LocaleContext.Consumer>
    );
};

export default LocaleSelector;
