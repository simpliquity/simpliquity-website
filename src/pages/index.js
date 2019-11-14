import BackgroundSection from "../components/BackgroundSection.js";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "../components/Container.js";
import LocaleWrapper from "../components/locale/LocaleWrapper.js";
import PageSection from "../components/PageSection.js";
import React from "react";
import Welcome from "../components/Welcome";
import withRoot from "../withRoot.js";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(() => ({
    main: {
        //backgroundColor: "#29b6f6",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(0,0,0,0.1) 100%)`,
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
        color: theme.palette.secondary.main
    }
}));

const IndexPage = ({ locale }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <LocaleWrapper locale={locale}>
                <BackgroundSection>
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
                            <PageSection>
                                <Container>
                                    <Welcome />
                                </Container>
                            </PageSection>
                        </Layout>
                    </div>
                </BackgroundSection>
            </LocaleWrapper>
        </ThemeProvider>
    );
};

export default withRoot(IndexPage);
