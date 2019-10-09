import {
    AlternateTextColor,
    MutedText,
    PrimaryColor,
    SecondaryColor
} from "../colors.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
    return {
        card: {
            height: "100%"
        },
        iconPart: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            backgroundColor: PrimaryColor,
            color: AlternateTextColor
        },
        iconPartSecondary: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "120px",
            backgroundColor: SecondaryColor,
            color: AlternateTextColor
        },
        title: {
            lineHeight: 1,
            marginBottom: "5px"
        },
        subtitle: {
            fontSize: "16px",
            lineHeight: "20px",
            color: MutedText
        }
    };
};

const IconSize = "60px";

const Feature = ({ classes, icon, secondary, subtitle, title }) => {
    return (
        <Card className={classes.card}>
            <div
                className={
                    secondary ? classes.iconPartSecondary : classes.iconPart
                }
            >
                <div className={classes.icon}>
                    <FontAwesomeIcon
                        icon={["far", icon]}
                        style={{ width: IconSize, height: IconSize }}
                    />
                </div>
            </div>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.subtitle}>{subtitle}</div>
            </CardContent>
        </Card>
    );
};

Feature.propTypes = {
    icon: PropTypes.string.isRequired,
    subtitle: PropTypes.node,
    title: PropTypes.node.isRequired
};

export default withStyles(styles)(Feature);
