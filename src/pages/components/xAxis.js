//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate

import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;
    const ref = useRef();

    useEffect(() => {
        if (xScale) {
            const axis = typeof xScale.domain()[0] === 'number'
                ? d3.axisBottom(xScale)
                : d3.axisBottom(xScale).tickFormat(d => d);
            
            d3.select(ref.current).call(axis);
        }
    }, [xScale]);

    return (
        <g ref={ref} transform={`translate(0, ${height})`}>
            {xScale && (
                <text
                    style={{ textAnchor: 'middle', fontSize: '15px' }}
                    x={width / 2}
                    y={40}
                >
                    {axisLabel}
                </text>
            )}
        </g>
    );
}

export default XAxis;
