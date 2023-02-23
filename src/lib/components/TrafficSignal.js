import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrafficSignal } from './TrafficSignal.styled';
import { VB_SIZE, COLORS, COLOR_NAMES } from './constants';

const randomID = (length) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

const TrafficSignal = ({ status, signalID, options = {} }) => {

    const horizontal = options?.horizontal === true ? true : false;
    const clockwise = options?.clockwise === true ? true : false;
    const rotation = horizontal === false ? 0 : (
        clockwise === true ? 90 : -90
    );
    const translate = (clockwise === true ? (VB_SIZE[3] - VB_SIZE[2]) : 0)
    const hiddenColors = [
        options?.hideRed === true ? 1 : 0,
        options?.hideAmber === true ? 1 : 0,
        options?.hideGreen === true ? 1 : 0
    ];

    if (signalID == null)
        signalID = randomID(32);

    return (
        <StyledTrafficSignal width={options?.width} margin={options?.margin}>
            <svg
                viewBox={
                    horizontal ?
                        `${VB_SIZE[0]} ${VB_SIZE[1]} ${hiddenColors.reduce(
                            (height, hidden) => height + !hidden * 45, 5
                        )} ${VB_SIZE[2]}`
                        :
                        `${VB_SIZE[0]} ${VB_SIZE[1]} ${VB_SIZE[2]} ${hiddenColors.reduce(
                            (height, hidden) => height + !hidden * 45, 5
                        )}`
                }
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g transform={
                    horizontal ?
                        `translate(${translate}) rotate(${rotation} ${VB_SIZE[2] / 2} ${VB_SIZE[2] / 2})`
                        :
                        undefined
                }
                >
                    <defs>
                        {
                            COLOR_NAMES.map((e, i) => {
                                let offset = 0;
                                if (e === "Red")
                                    offset = 0;
                                if (e === "Amber")
                                    offset = !hiddenColors[0] * 45.0;
                                if (e === "Green")
                                    offset = !hiddenColors[0] * 45.0 + !hiddenColors[1] * 45.0;

                                if (hiddenColors[i])
                                    return undefined;

                                return (
                                    <g key={i}>
                                        <radialGradient
                                            xlinkHref={`#${e}-lg-${signalID}`}
                                            id={`${e}-rg-${signalID}`}
                                            cx={85.0}
                                            cy={75.0}
                                            fx={85.0}
                                            fy={75.0}
                                            r={20}
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform={`translate(0.0 ${offset})`}
                                        />
                                        <linearGradient
                                            id={`${e}-lg-${signalID}`}
                                        >
                                            <stop
                                                style={{
                                                    stopColor: status.toUpperCase().charAt(i) === e.charAt(0)
                                                        ?
                                                        COLORS[e].light :
                                                        COLORS['Gray'].light,
                                                    stopOpacity: 1,
                                                }}
                                                offset={0}
                                            />
                                            <stop
                                                style={{
                                                    stopColor: status.toUpperCase().charAt(i) === e.charAt(0)
                                                        ?
                                                        COLORS[e].dark :
                                                        COLORS['Gray'].dark,
                                                    stopOpacity: 1,
                                                }}
                                                offset={1}
                                            />
                                        </linearGradient>
                                    </g>
                                )
                            })
                        }
                    </defs>
                    <g transform="translate(-55.0 -50.0)">
                        <rect
                            style={{
                                opacity: 1,
                                fill: "#000",
                                fillOpacity: 1,
                                strokeWidth: 0.4,
                                strokeLinejoin: "round",
                                paintOrder: "stroke markers fill",
                            }}
                            width={60}
                            height={hiddenColors.reduce(
                                (height, hidden) => height + !hidden * 45, 5
                            )}
                            x={55.0}
                            y={50.0}
                            ry={6}
                            rx={6}
                        />
                        {
                            COLOR_NAMES.map((e, i) => {
                                let offset = 0;
                                if (e === "Red")
                                    offset = 0;
                                if (e === "Amber")
                                    offset = !hiddenColors[0] * 45.0;
                                if (e === "Green")
                                    offset = !hiddenColors[0] * 45.0 + !hiddenColors[1] * 45.0;

                                if (hiddenColors[i])
                                    return undefined;

                                return (
                                    <circle
                                        key={i}
                                        style={{
                                            opacity: 1,
                                            fill: `url(#${e}-rg-${signalID})`,
                                            fillOpacity: 1,
                                            strokeWidth: 0.4,
                                            strokeLinejoin: "round",
                                            paintOrder: "stroke markers fill",
                                        }}
                                        cx={85.0}
                                        cy={75.0 + offset}
                                        r={20}
                                    >
                                        {['r', 'a', 'g'].includes(status.charAt(i)) &&
                                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
                                        }
                                    </circle>
                                )
                            })
                        }
                    </g>
                </g>
            </svg>

        </StyledTrafficSignal>
    )
}

// Factory function (also called a higher-order function)
function CreateIsTrafficSignalStatus(isRequired) {
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

const isTrafficSignalStatus = CreateIsTrafficSignalStatus(false);
isTrafficSignalStatus.isRequired = CreateIsTrafficSignalStatus(true);

TrafficSignal.propTypes = {
    status: isTrafficSignalStatus.isRequired,
    signalID: PropTypes.number,
    options: PropTypes.object,
}

export default TrafficSignal;