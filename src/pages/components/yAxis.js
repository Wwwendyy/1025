import React, { useRef, useEffect } from 'react';
import { axisLeft } from 'd3-axis'; // Import axisLeft from d3-axis
import { select } from 'd3-selection';

function YAxis(props) {
    const { yScale, height, axisLabel } = props; // Correct axisLabel spelling
    const axisRef = useRef(null); // Use useRef here

    useEffect(() => {
        if (yScale) {
            const isLinear = typeof yScale.domain()[0] === 'number';
            const axis = axisLeft(yScale);
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