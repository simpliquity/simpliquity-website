import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const Logo = ({ data }) => <Img fixed={data.file.childImageSharp.fixed} />;

export default () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "simpliquity_logo_transparent.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fixed(width: 300) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <Logo data={data} />}
    />
);
