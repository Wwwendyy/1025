import React from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, hoveredStation, setTooltipData, setTooltipPos, onMouseEnter } = props;

    // Function to determine the color of the circle
    const getColor = (station) => {
        return station === hoveredStation ? 'red' : 'steelblue';
    };

    // Function to determine the radius of the circle
    const getRadius = (station) => {
        return station === hoveredStation ? 10 : 5;
    };

    const handleMouseEnter = (dataPoint, event) => {
        setTooltipData(dataPoint);
        setTooltipPos({ x: event.pageX, y: event.pageY });
        onMouseEnter(dataPoint.station);
    };

    const handleMouseOut = () => {
        setTooltipData(null);
    };


    if (data) {
        return (
            <g>
                {/* Yellow rectangle covering all points when a point is hovered */}
                {hoveredStation && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="yellow"
                        opacity={0.5}
                    />
                )}
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)} 
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        stroke="black"
                        strokeWidth={1}
                        onMouseEnter={(event) => handleMouseEnter(d, event)}
                        onMouseOut={handleMouseOut}
                        style={{ transition: 'fill 0.2s, r 0.2s' }}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Points;