import React from "react";
import Icons from "./icons.svg";
import PropTypes from "prop-types";

const Icon = ({ name, color, opacity, size }) => (
    <svg
        className={`icon icon-${name} ${opacity}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#${name}`} />
    </svg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;
