import Feature from "./Feature.js";
import Grid from "@material-ui/core/Grid";
import I18n from "./locale/I18n.js";
import Part from "./Part.js";
import React from "react";

const features = () => {
    return [
        {
            key: "news",
            icon: "newspaper",
            title: "FeatNews",
            subtitle: "FeatNews_sub"
        },
        {
            key: "targetedComm",
            icon: "object-group",
            title: "FeatTargetedCommunication",
            subtitle: "FeatTargetedCommunication_sub"
        },
        {
            key: "coursePlanning",
            icon: "calendar-alt",
            title: "FeatCoursePlanning",
            subtitle: "FeatCoursePlanning_sub"
        },
        {
            key: "registration",
            icon: "user-plus",
            title: "FeatRegistration",
            subtitle: "FeatRegistration_sub"
        },
        {
            key: "evaluation",
            icon: "chart-bar",
            title: "FeatEvaluations",
            subtitle: "FeatEvaluations_sub"
        },
        {
            key: "sms",
            icon: "sms",
            title: "FeatSms",
            subtitle: "FeatSms_sub"
        }
    ];
};

const TeacherFeatures = () => {
    return (
        <Part title={<I18n label="OrganisationFeaturesTitle" />}>
            <Grid container spacing={24}>
                {features().map(({ key, title, subtitle, ...feat }) => (
                    <Grid key={key} item xs={12} sm={4} md={4}>
                        <Feature
                            {...feat}
                            secondary={true}
                            title={<I18n label={title} />}
                            subtitle={<I18n label={subtitle} />}
                        />
                    </Grid>
                ))}
            </Grid>
        </Part>
    );
};

export default TeacherFeatures;
