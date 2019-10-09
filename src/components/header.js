import Container from "../components/Container.js";
import Link from "./Link.js";
import Logo from "./IsyflowLogo.js";
import LocaleSelector from "./LocaleSelector.js";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
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
            <Container>
                <div className={classes.wrapper}>
                    <Link target="/">
                        <Logo style={{ maxWidth: "100%" }} />
                    </Link>
                    <LocaleSelector />
                </div>
            </Container>
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
