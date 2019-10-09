import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    container: {
        margin: `0 auto`,
        padding: 0,
        maxWidth: 960
    }
};

const Container = ({ classes, style, ...props }) => {
    return (
        <div className={classes.container} style={style}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    style: PropTypes.object
};

export default withStyles(styles)(Container);
