import "./layout.css";

import Container from "./Container.js";
import Footer from "./Footer.js";
import Header from "./header";
import PropTypes from "prop-types";
import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { withStyles } from "@material-ui/core/styles";

const FOOTER_HEIGHT = "4rem";

const styles = {
    pageContainer: {
        position: "relative",
        minHeight: "100vh"
    },
    contentWrap: {
        padding: "20px 10px 10px 10px",
        paddingBottom: FOOTER_HEIGHT
    },
    content: {
        marginTop: "20px"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: FOOTER_HEIGHT,
        backgroundColor: "#444",
        color: "#eee",
        padding: "0 10px"
    }
};

const Layout = ({ children, classes }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div id="pageContainer" className={classes.pageContainer}>
                <div className={classes.contentWrap}>
                    <Container>
                        <Header siteTitle={data.site.siteMetadata.title} />
                    </Container>
                    <div className={classes.content}>{children}</div>
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default withStyles(styles)(Layout);
