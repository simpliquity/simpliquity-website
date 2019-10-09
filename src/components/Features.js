import Grid from "@material-ui/core/Grid";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import WorkspacesFeature from "./features/Workspaces.js";

const styles = {
    wrapper: {
        overflow: "hidden"
    },
    featureWrapper: {
        padding: "3px"
    }
};

const FeatureWrapper = ({ classes, ...props }) => (
    <div className={classes.featureWrapper}>{props.children}</div>
);

const Features = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <FeatureWrapper classes={classes}>
                        <WorkspacesFeature />
                    </FeatureWrapper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureWrapper classes={classes}>
                        <WorkspacesFeature />
                    </FeatureWrapper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Features);
