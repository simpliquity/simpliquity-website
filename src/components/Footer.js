import Container from "../components/Container.js";
import I18n from "./locale/I18n.js";
import Link from "./Link.js";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    footer: {
        padding: "20px 0"
    },
    features: {
        backgroundColor: "#eee"
    },
    link: {
        color: "inherit",
        textDecoration: "none"
    },
    contentWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
};

const Footer = ({ classes }) => {
    return (
        <div className={classes.footer}>
            <Container>
                <div className={classes.contentWrapper}>
                    <div>
                        <Link target="/PrivacyPolicy" className={classes.link}>
                            <I18n label="PrivacyPolicy" />
                        </Link>
                    </div>
                    <div>
                        ©{new Date().getFullYear()}{" "}
                        <a
                            className={classes.link}
                            href="https://www.lateralstudio.ch"
                        >
                            Simpliquity Sàrl
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default withStyles(styles)(Footer);
