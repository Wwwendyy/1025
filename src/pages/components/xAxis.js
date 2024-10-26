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
import React from 'react';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

function XAxis(props) {
    const { xScale, height, width, axisLabel} = props;
    const axisRef = React.useRef(null);

    // Create the axis whenever xScale changes
    React.useEffect(() => {
        if (xScale) {
            const axis = axisBottom(xScale);
            select(axisRef.current).call(axis);
            }
            const isLinear = typeof xScale.domain()[0] === 'number';

            select(axisRef.current)
                .selectAll("text")
                .style("text-anchor", "start")
                .attr("transform", isLinear ? "rotate(0)" : "rotate(75)");
    }, [xScale]);

    return (
        <g transform={`translate(0, ${height})`}>
            <g ref={axisRef}></g>
                <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(${width}, -10)`}>
                    {axisLabel}
                </text>
        </g>
    );
}

export default XAxis