import LocaleContext from "./locale/LocaleContext.js";
import PropTypes from "prop-types";
import queryString from "query-string";
import React from "react";

const getLinkTarget = ({ target, queryParams = {}, locale }) => {
    const params = {
        ...queryParams,
        lang: locale
    };
    return `${target}?${queryString.stringify(params)}`;
};

const Link = props => {
    return (
        <LocaleContext.Consumer>
            {({ locale }) => (
                <a
                    href={getLinkTarget({ ...props, locale })}
                    className={props.className}
                    style={props.style}
                >
                    {props.children}
                </a>
            )}
        </LocaleContext.Consumer>
    );
};

Link.propTypes = {
    className: PropTypes.string,
    queryParams: PropTypes.object,
    style: PropTypes.object,
    target: PropTypes.string.isRequired
};

export default Link;
