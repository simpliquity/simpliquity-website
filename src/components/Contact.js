import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import I18n from "./locale/I18n.js";
import React from "react";

const Contact = () => (
    <Button
        variant="outlined"
        size="medium"
        color={"secondary"}
        href={"mailto:info@isyflow.ch"}
    >
        <I18n label="ContactUs" />
        &nbsp;
        <FontAwesomeIcon icon={["far", "at"]} />
    </Button>
);

export default Contact;
