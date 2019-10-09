import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    wrapper: {
        display: "flex",
        alignItems: "flex-base",
        justifyContent: "flex-start",
        backgroundColor: "#BBDEFB",
        color: "#000",
        padding: "20px"
    },
    icon: {
        color: "#2196F3",
        padding: "0 10px 0 0"
    }
});

const InfoBox = ({ classes, ...props }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.icon}>
                <FontAwesomeIcon
                    icon={["far", "info"]}
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                />
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default withStyles(styles)(InfoBox);
