import Link from "./Link.js";
import LocaleSelector from "./LocaleSelector.js";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header
            style={
                {
                    //paddingTop: "1rem",
                    //paddingBottom: `0.45rem`
                }
            }
        >
            <div className={classes.wrapper}>
                <Link target="/" />
                <LocaleSelector />
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
