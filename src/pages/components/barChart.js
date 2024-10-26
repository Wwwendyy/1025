import React from 'react';
import Bars from './bars';
import YAxis from './yAxis';
import XAxis from './xAxis';

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, onMouseEnter, onMouseOut} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return <g transform={`translate(${offsetX},${offsetY})`}>  {/* Applying offset transformation */}
        <Bars data={data} xScale={xScale} yScale={yScale} height={height} 
            hoveredStation={hoveredStation}
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}/>  {/* Render the bars */}
        <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"} />  {/* Render Y-axis */}
        <XAxis xScale={xScale} height={height} width={width} />  {/* Render X-axis */}
        </g>
}

export default BarChart