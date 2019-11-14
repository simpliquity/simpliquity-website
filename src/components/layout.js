import "./layout.css";

import Footer from "./Footer.js";
import Header from "./header.js";
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
        padding: 0,
        paddingBottom: FOOTER_HEIGHT
    },
    headerWrap: {
        //backgroundColor: "rgba(255,255,255,0.8)",
        padding: "10px 20px"
    },
    content: {
        marginTop: "20px"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
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
                    <div className={classes.headerWrap}>
                        <Header siteTitle={data.site.siteMetadata.title} />
                    </div>
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
