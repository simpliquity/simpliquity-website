import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    part: {
        margin: "40px 0 0 0"
    },
    content: {
        padding: "40px 0"
    }
});

const Part = ({ classes, title, ...props }) => {
    return (
        <div className={classes.part}>
            <Typography variant="h4">{title}</Typography>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

Part.propTypes = {
    title: PropTypes.node.isRequired
};

export default withStyles(styles)(Part);
