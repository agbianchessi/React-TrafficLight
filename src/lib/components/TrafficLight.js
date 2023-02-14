import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrafficLight } from './TrafficLight.styled';

const randomID = (length) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

const TrafficLight = ({ colors, signalID }) => {

    if (signalID == null)
        signalID = randomID(32);

    return (
        <StyledTrafficLight>
            <svg

                viewBox="0 0 60 140"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient
                        xlinkHref={`#a${signalID}`}
                        id={`d${signalID}`}
                        cx={84.907}
                        cy={76.452}
                        fx={84.907}
                        fy={76.452}
                        r={20}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(.352)"
                    />
                    <radialGradient
                        xlinkHref={`#b${signalID}`}
                        id={`e${signalID}`}
                        cx={84.907}
                        cy={76.452}
                        fx={84.907}
                        fy={76.452}
                        r={20}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(.352 43.51)"
                    />
                    <radialGradient
                        xlinkHref={`#c${signalID}`}
                        id={`f${signalID}`}
                        cx={84.907}
                        cy={76.452}
                        fx={84.907}
                        fy={76.452}
                        r={20}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(.352 87.021)"
                    />
                    <linearGradient id={`c${signalID}`}>
                        <stop
                            style={{
                                stopColor: "#ffead2",
                                stopOpacity: 1,
                            }}
                            offset={0}
                        />
                        <stop
                            style={{
                                stopColor: colors.toUpperCase().charAt(2) === "G" ? "#00eb00" : "#333333",
                                stopOpacity: 1,
                            }}
                            offset={1}
                        />
                    </linearGradient>
                    <linearGradient id={`b${signalID}`}>
                        <stop
                            style={{
                                stopColor: "#ffdfdd",
                                stopOpacity: 1,
                            }}
                            offset={0}
                        />
                        <stop
                            style={{
                                stopColor: colors.toUpperCase().charAt(1) === "A" ? "#ffc600" : "#333333",
                                stopOpacity: 1,
                            }}
                            offset={1}
                        />
                    </linearGradient>
                    <linearGradient id={`a${signalID}`}>
                        <stop
                            style={{
                                stopColor: "#ffb7b7",
                                stopOpacity: 1,
                            }}
                            offset={0}
                        />
                        <stop
                            style={{
                                stopColor: colors.toUpperCase().charAt(0) === "R" ? "#ff0000" : "#333333",
                                stopOpacity: 1,
                            }}
                            offset={1}
                        />
                    </linearGradient>
                </defs>
                <g transform="translate(-55.084 -50.315)">
                    <rect
                        style={{
                            opacity: 1,
                            fill: "#000",
                            fillOpacity: 1,
                            strokeWidth: 0.402106,
                            strokeLinejoin: "round",
                            paintOrder: "stroke markers fill",
                        }}
                        width={60}
                        height={140}
                        x={55.084}
                        y={50.315}
                        ry={6}
                        rx={6}
                    />
                    <circle
                        style={{
                            opacity: 1,
                            fill: `url(#d${signalID})`,
                            fillOpacity: 1,
                            strokeWidth: 0.391559,
                            strokeLinejoin: "round",
                            paintOrder: "stroke markers fill",
                        }}
                        cx={85.26}
                        cy={76.452}
                        r={20}
                    >
                        {colors.charAt(0) === "r" &&
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
                        }
                    </circle>
                    <circle
                        style={{
                            fill: `url(#e${signalID})`,
                            fillOpacity: 1,
                            strokeWidth: 0.391559,
                            strokeLinejoin: "round",
                            paintOrder: "stroke markers fill",
                        }}
                        cx={85.26}
                        cy={119.963}
                        r={20}
                    >
                        {colors.charAt(1) === "a" &&
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
                        }
                    </circle>
                    <circle
                        style={{
                            fill: `url(#f${signalID})`,
                            fillOpacity: 1,
                            strokeWidth: 0.391559,
                            strokeLinejoin: "round",
                            paintOrder: "stroke markers fill",
                        }}
                        cx={85.26}
                        cy={163.473}
                        r={20}
                    >
                        {colors.charAt(2) === "g" &&
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
                        }
                    </circle>
                </g>
            </svg>
        </StyledTrafficLight>
    )
}

// Factory function (also called a higher-order function)
function CreateIsTrafficLightColors(isRequired) {
    // The factory returns a custom prop type
    return function (props, propName, componentName) {
        const prop = props[propName];
        if (prop == null) {
            // Prop is missing
            if (isRequired) {
                // Prop is required but wasn't specified. Throw an error.
                throw new Error();
            }
            // Prop is optional. Do nothing.
        } else {
            // Validation logic
            const regex = /^[rRB][aAB][gGB]$/;

            if (!regex.test(prop)) {
                return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid [rRB][aAB][gGB] string.`);
            }
        }
    }
}

const isTrafficLightColors = CreateIsTrafficLightColors(false);
isTrafficLightColors.isRequired = CreateIsTrafficLightColors(true);

TrafficLight.propTypes = {
    colors: isTrafficLightColors.isRequired,
    signalID: PropTypes.number,
    options: PropTypes.object,
}

export default TrafficLight;