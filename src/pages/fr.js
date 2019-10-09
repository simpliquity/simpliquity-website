import IndexPage from "./index.js";
import { Locales } from "../components/locale/constants.js";
import React from "react";

const Page = props => <IndexPage {...props} locale={Locales.FR} />;

export default Page;
