import BackgroundImage from "gatsby-background-image";
import { graphql, StaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    bgImage: {
        width: "100%",
        backgroundColor: "#f4f4fb",
        backgroundPosition: "bottom center",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover"
    }
}));

const BackgroundSection = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <div className={classes.bgImage}>
            <StaticQuery
                query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "bg/img_0.jpg" }) {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    // Set ImageData.
                    const imageData = data.desktop.childImageSharp.fluid;
                    return (
                        <BackgroundImage
                            Tag="section"
                            className={className}
                            fluid={imageData}
                            backgroundColor={`#040e18`}
                        >
                            {props.children}
                        </BackgroundImage>
                    );
                }}
            />
        </div>
    );
};

export default BackgroundSection;
