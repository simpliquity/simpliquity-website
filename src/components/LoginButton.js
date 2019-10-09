import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import I18n from "./locale/I18n.js";
import React from "react";

const LoginButton = () => (
    <Button
        variant="outlined"
        size="medium"
        color={"primary"}
        href={"https://my.isyflow.ch"}
    >
        <I18n label="Login" />
        &nbsp;
        <FontAwesomeIcon icon={["far", "sign-in"]} />
    </Button>
);

export default LoginButton;
