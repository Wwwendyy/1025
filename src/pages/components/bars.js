import React from 'react';

function Bars(props) {
    const {data, xScale, yScale, height, selectedItem, setItem} = props;

    const mouseOver = (i) => {
        setItem(i);
    };
    const mouseOut = () => {
        setItem(null);
    };

    // Function to determine the color of the bar
    const getColor = (i) => i === selectedItem ? "red" : "steelblue";
    

    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return (<g>
            {/* {task:
                    1. remove this comments and put your code here
                    2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
            {data.map((d, i) => {
                return (<rect key={i} x={xScale(d.station)}
                y={yScale(d.start)} width={10} height={height-yScale(d.start)}
                fill={getColor(i)} stroke={"black"}
                onMouseOver ={()=> mouseOver(i)}
                onMouseOut = {mouseOut}/>)
            })}
            </g>);
    } else {
        return <g></g>
    }
}

export default Bars