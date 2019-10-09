import { createMuiTheme } from "@material-ui/core/styles";
import Container from "../components/Container.js";
import LocaleWrapper from "../components/locale/LocaleWrapper.js";
import PageSection from "../components/PageSection.js";
import React from "react";
import Welcome from "../components/Welcome";
import withRoot from "../withRoot.js";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ThemeProvider } from "@material-ui/styles";

import "../fontawesome.js";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#007480"
        },
        secondary: {
            main: "#FFFFFF"
        }
    }
});

const styles = {
    main: {
        backgroundColor: "#fff"
    },
    welcome: {},
    features: {}
};

const IndexPage = ({ classes, locale }) => (
    <ThemeProvider theme={theme}>
        <LocaleWrapper locale={locale}>
            <div className={classes.main}>
                <Layout>
                    <SEO
                        title="Simpliquity"
                        keywords={[
                            `e-learning`,
                            `tangible`,
                            `augmented reality`,
                            `simulation`,
                            `learning technologies`,
                            `logistics`,
                            `vocational training`
                        ]}
                    />
                    <PageSection className={classes.welcome}>
                        <Container>
                            <Welcome />
                        </Container>
                    </PageSection>
                </Layout>
            </div>
        </LocaleWrapper>
    </ThemeProvider>
);

export default withRoot(withStyles(styles)(IndexPage));
