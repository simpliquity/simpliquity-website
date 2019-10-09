import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Description, Title } from "./typography.js";
import I18n from "../locale/I18n.js";
import React from "react";
import WorkspaceImage from "./WorkspaceImage.js";

const Workspaces = () => {
    return (
        <Card>
            <WorkspaceImage />
            <CardContent>
                <Title>
                    <I18n label="features.Workspaces" />
                </Title>
                <Description>
                    <I18n label="features.WorkspacesContent" />
                </Description>
            </CardContent>
        </Card>
    );
};

export default Workspaces;
