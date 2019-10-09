import Container from "../components/Container.js";
import I18n from "./locale/I18n.js";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    footer: {
        padding: "10px 0"
    },
    link: {
        color: "#eee",
        textDecoration: "none"
    },
    contentWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Container>
                <div className={classes.contentWrapper}>
                    <div>
                        <div>Simpliquity Sàrl</div>
                        <div>Ch. de Bérée 22B, 1010 Lausanne</div>
                    </div>
                    <div>
                        <div>
                            <a
                                href="mailto:contact@simpliquity.com"
                                className={classes.link}
                            >
                                <I18n label="Email" />
                            </a>
                        </div>
                        <div>
                            <a href="tel:+41765168671" className={classes.link}>
                                +41 (0)76 516 86 71
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
