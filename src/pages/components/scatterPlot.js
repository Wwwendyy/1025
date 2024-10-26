import React from 'react';
import Points from './points';
import YAxis from './yAxis';
import XAxis from './xAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale,
            height, width, infoStation, onMouseEnter, onMouseOut,
            setTooltipData, setTooltipPos } = props;
    const handleMouseEnter = (station, event) => {setTooltipData(station);
                                                setTooltipPos({ x: event.pageX, y: event.pageY });
                                                onMouseEnter(station);
                                                };
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points
                data={data}
                xScale={xScale}
                yScale={yScale}
                height={height}
                width={width}
                infoStation={infoStation}
                onMouseEnter={onMouseEnter}
                onMouseOut={() => setTooltipData(null)}
                setTooltipData={setTooltipData}
                setTooltipPos={setTooltipPos}
            />
            <YAxis
                yScale={yScale}
                height={height}
                axisLabel={"Trip duration end in"}
            />
            <XAxis
                xScale={xScale}
                height={height}
                width = {width}
                axisLabel={"Trip duration start from"}
            />
        </g>
    );
}
export default ScatterPlot