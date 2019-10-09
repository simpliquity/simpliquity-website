import PropTypes from "prop-types";
import React from "react";

const Youtube = props => {
    return (
        <div
            style={{
                padding: "56.25% 0 0 0",
                position: "relative"
            }}
        >
            <iframe
                src={props.src}
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>
    );
};

Youtube.propTypes = {
    src: PropTypes.string.isRequired
};

export default Youtube;
