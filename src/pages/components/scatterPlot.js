import React from 'react';
import Points from './points';
import YAxis from './yAxis';
import XAxis from './xAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale,
            height, width, infoStation, onMouseEnter, onMouseOut,
            setTooltipData, setTooltipPos } = props;
    const [infoPoint, setInfoPoint] = useState(null);
    const handleMouseEnter = (d, event) => {
        setInfoPoint(d); // Track the hovered point
        onMouseEnter(d); // Call the external onMouseEnter function
        setTooltipData(d); // Set tooltip data
        setTooltipPos({ x: event.pageX, y: event.pageY }); // Set tooltip position
    };

    const handleMouseOut = () => {
        setInfoPoint(null); // Clear hovered point state
        onMouseOut(); // Clear the tooltip data
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