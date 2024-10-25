import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function YAxis(props) {
    const { yScale, height, axisLabel } = props;
    const ref = useRef();

    useEffect(() => {
        if (yScale) {
            const axis = d3.axisLeft(yScale);
            d3.select(ref.current).call(axis);
        }
    }, [yScale]);

    return (
        <g ref={ref}>
            {yScale && (
                <text
                    style={{ textAnchor: 'end', fontSize: '15px' }}
                    transform={`rotate(-90)`}
                    x={-height / 2}
                    y={-40}
                >
                    {axisLabel}
                </text>
            )}
        </g>
    );
}

export default YAxis;
