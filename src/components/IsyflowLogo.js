import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: site(
                    relativePath: { eq: "simpliquity_logo.png" }
                ) {
                    childImageSharp {
                        fixed(height: 60) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fixed={data.placeholderImage.childImageSharp.fixed}
                fadeIn={false}
            />
        )}
    />
);
export default Image;
