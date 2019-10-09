import React from "react";
import Typography from "@material-ui/core/Typography";

const Title = props => (
    <Typography gutterBottom variant="h6" component="h2">
        {props.children}
    </Typography>
);

const Description = props => (
    <Typography component="p">{props.children}</Typography>
);

export { Description, Title };
