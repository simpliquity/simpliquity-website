import Container from "../components/Container.js";
import { translate } from "../components/locale/I18n.js";
import Layout from "../components/layout";
import LocaleContext from "../components/locale/LocaleContext.js";
import LocaleWrapper from "../components/locale/LocaleWrapper.js";
import PageSection from "../components/PageSection.js";
import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

const PrivacyPolicyPage = () => {
    return (
        <LocaleWrapper locale="en">
            <Layout>
                <PageSection>
                    <Container>
                        <LocaleContext.Consumer>
                            {({ locale }) => (
                                <ReactMarkdown
                                    escapeHtml={true}
                                    source={translate({
                                        label: "PrivacyPolicyContent",
                                        locale
                                    })}
                                />
                            )}
                        </LocaleContext.Consumer>
                    </Container>
                </PageSection>
            </Layout>
        </LocaleWrapper>
    );
};

export default withStyles(styles)(PrivacyPolicyPage);
