import React from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, hoveredStation, onMouseEnter, onMouseOut } = props;

    // Function to determine the color of the bar
    const getColor = (station) => {
        return station === hoveredStation ? 'red' : 'steelblue';
    };

    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)}
                        y={yScale(d.start)} 
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(d.station)}
                        stroke="black" 
                        strokeWidth={1} 
                        onMouseEnter={() => onMouseEnter(d.station)} // Use the passed onMouseEnter
                        onMouseOut={onMouseOut} // Use the passed onMouseOut
                        style={{ transition: 'fill 0.2s' }} 
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Bars;