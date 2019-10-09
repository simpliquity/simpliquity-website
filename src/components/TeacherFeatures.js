import Feature from "./Feature.js";
import Grid from "@material-ui/core/Grid";
import I18n from "./locale/I18n.js";
import Part from "./Part.js";
import React from "react";

const features = () => {
    return [
        {
            key: "courseHomepage",
            icon: "home",
            title: "FeatTeacherWorkspace",
            subtitle: "FeatTeacherWorkspace_sub"
        },
        {
            key: "multimediaDocs",
            icon: "photo-video",
            title: "FeatMultimediaDocs",
            subtitle: "FeatMultimediaDocs_sub"
        },
        {
            key: "multimediaComments",
            icon: "comment-alt-edit",
            title: "FeatMultimediaComments",
            subtitle: "FeatMultimediaComments_sub"
        },
        {
            key: "linksIntegration",
            icon: "link",
            title: "FeatLinksIntegration",
            subtitle: "FeatLinksIntegration_sub"
        },
        {
            key: "activities",
            icon: "tasks",
            title: "FeatActivities",
            subtitle: "FeatActivities_sub"
        },
        {
            key: "communication",
            icon: "comments-alt",
            title: "FeatChat",
            subtitle: "FeatChat_sub"
        }
    ];
};

const TeacherFeatures = () => {
    return (
        <Part title={<I18n label="TeacherFeaturesTitle" />}>
            <Grid container spacing={24}>
                {features().map(({ key, title, subtitle, ...feat }) => (
                    <Grid key={key} item xs={12} sm={4} md={4}>
                        <Feature
                            {...feat}
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
