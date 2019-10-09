import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import I18n from "./locale/I18n.js";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    wrapper: {
        display: "flex",
        alignItems: "flex-base",
        justifyContent: "flex-start",
        backgroundColor: "#FFE0B2",
        color: "#BF360C",
        padding: "20px"
    },
    icon: {
        padding: "0 10px 0 0"
    }
});

const PricingWarning = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.icon}>
                <FontAwesomeIcon
                    icon={["far", "exclamation-square"]}
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                />
            </div>
            <div>
                <I18n label="PricingWarning" />
            </div>
        </div>
    );
};

export default withStyles(styles)(PricingWarning);
