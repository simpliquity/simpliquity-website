import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import I18n from "./locale/I18n.js";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Youtube from "./Youtube.js";

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(4),
        textTransform: "uppercase",
        color: "#000",
        marginTop: "30px",
        padding: "0 10px"
    },
    subtitle: {
        marginTop: "5px",
        lineHeight: 1,
        color: "#444"
    },
    gridItem: {
        padding: "10px"
    }
}));

const Welcome = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h4">
                    <I18n label="Title" />
                </Typography>
                <Typography variant="h5" className={classes.subtitle}>
                    <I18n label="Subtitle" />
                </Typography>
            </div>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                    <Card>
                        <CardContent>
                            <p>
                                <I18n label="Description_1" />
                            </p>
                            <p>
                                <I18n label="Description_2" />
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                    <Youtube src="https://www.youtube.com/embed/CYuDYWYxKb8" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;
