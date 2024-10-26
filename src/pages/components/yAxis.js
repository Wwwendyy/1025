import React, { useRef, useEffect } from 'react';
import {select, axisLeft} from 'd3'; // Import axisLeft from d3-axis

function YAxis(props) {
    const { yScale, height, axisLabel } = props; // Correct axisLabel spelling
    const axisRef = useRef(null); // Use useRef here

    useEffect(() => {
        if (yScale) {
            const axis = axisLeft(yScale);
            //const isLinear = typeof yScale.domain()[0] === 'number';
            select(axisRef.current).call(axis);
        }
    }, [yScale]); // Only depend on yScale

    return (
        <g>
            <g ref={axisRef}></g>
            <svg>
                <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0) rotate(-90)`}>
                    {axisLabel}
                </text>
            </svg>
        </g>
    );
}

export default YAxis;