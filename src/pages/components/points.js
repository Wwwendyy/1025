import React from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, infoStation, setTooltipData, setTooltipPos, onMouseEnter } = props;

    const getColor = (station) => {return station === infoStation ? 'red' : 'steelblue';};

    const getRadius = (station) => {return station === infoStation ? 10 : 5;};

    const handleMouseEnter = (dataPoint, event) => {
                                                    setTooltipData(dataPoint);
                                                    setTooltipPos({ x: event.pageX, y: event.pageY });
                                                    onMouseEnter(dataPoint.station);
                                                };

    if (data) {
        return (
            <g>
                {infoStation && (
                    <rect
                        x={0}
                        y={0}
                        height={height}
                        width={width}
                        opacity={0.5}
                        fill="yellow"
                    />
                )}
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)} 
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        strokeWidth={1}
                        stroke="black"
                        onMouseEnter={(event) => handleMouseEnter(d, event)}
                        onMouseOut={() => {setTooltipData(null);}}
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