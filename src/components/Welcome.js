import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Contact from "./Contact.js";
import Grid from "@material-ui/core/Grid";
import I18n from "./locale/I18n.js";
import InfoBox from "../components/InfoBox.js";
import React from "react";
import LoginButton from "./LoginButton.js";
//import TitleImage from "./TitleImage.js";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    wrapper: {
        //height: "880px",
        //textAlign: "center",
        //backgroundColor: "#29b6f6",
        //backgroundImage: `linear-gradient(to bottom, rgba(0, 116, 128, 0.5) 0%, rgba(0, 167, 159, 0.5) 100%), url("/images/An-Illusion-EPFL.jpg")`,
        //backgroundPosition: "bottom right",
        //backgroundSize: "cover",
        //color: theme.palette.secondary.main,
        //textTransform: "uppercase"
    },
    buttons: {
        textAlign: "right",
        padding: "10px"
    },
    buttons: {
        marginTop: "20px"
    },
    card: {
        margin: "5px"
    },
    contactButton: {
        marginTop: "10px"
    },
    description: {
        whiteSpace: "pre-wrap"
    },
    subtitle: {
        marginTop: "5px",
        lineHeight: 1,
        color: "#777"
    },
    text: {
        padding: "30px 0 0 0"
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    infoBox: {
        margin: "30px 0"
    }
});

const Welcome = ({ classes }) => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Typography variant="h4">
                <I18n label="Title" />
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
                <I18n label="Subtitle" />
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={8} md={7} lg={7}>
                    <div className={classes.text}>
                        <Typography variant="h4">
                            <I18n label="WelcomeTitle" />
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.subtitle}
                        >
                            <I18n label="WelcomeSubtitle" />
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                        <LoginButton />
                        &nbsp;
                        <Contact />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={5} lg={5} />
            </Grid>
            <div className={classes.infoBox}>
                <InfoBox>
                    <I18n label="InfoPrivateRollout" />
                </InfoBox>
            </div>
            {false && (
                <div className={classes.card}>
                    <Card>
                        <Grid container spacing={24}>
                            <Grid item sm={12} md={6}>
                                <CardContent>
                                    <div className={classes.description}>
                                        <I18n label="IsyflowDescription" />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <div>
                                        <LoginButton />
                                        <Contact />
                                    </div>
                                </CardActions>
                            </Grid>
                            <Grid item md={6}>
                                <CardContent />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default withStyles(styles)(Welcome);
