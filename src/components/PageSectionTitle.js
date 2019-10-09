import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    title: {
        paddingTop: "1.45rem",
        fontSize: "1.45rem"
    }
};

const PageSectionTitle = ({ classes, title }) => {
    return <div className={classes.title}>{title}</div>;
};

export default withStyles(styles)(PageSectionTitle);
