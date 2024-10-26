import React from 'react';

function Points(props) {
    const { data, xScale, yScale, width, height, selectedItem, setItem, setTooltipX, setTooltipY} = props;

    const mouseOver = (i, event) => {
        setItem(i); 
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);
    };

    const mouseOut = () => {

        setItem(null);  
    };

    const getColor = i => i === selectedItem ? "red" : "steelblue";
    const getRadius = i => i === selectedItem ? 10 : 5;

    if (data) {
        return (
            <g>
                {selectedItem !== null && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="yellow"
                        opacity={0.6}  
                    />
                )}
                {data.map((d, i) => (
                    i !== selectedItem && (
                        <circle
                            key={i}
                            cx={xScale(d.tripdurationS)}
                            cy={yScale(d.tripdurationE)}
                            r={getRadius(i)}  
                            fill={getColor(i)}  
                            stroke={"black"}
                            onMouseOver={(event) => mouseOver(i, event)}
                            onMouseOut={mouseOut}
                        />
                    )
                ))}

                {selectedItem !== null && (
                    <circle
                        cx={xScale(data[selectedItem].tripdurationS)}  
                        cy={yScale(data[selectedItem].tripdurationE)}
                        r={getRadius(selectedItem)}  
                        fill={getColor(selectedItem)} 
                        stroke={"black"}
                        onMouseOver={(event) => mouseOver(selectedItem, event)}
                        onMouseOut={mouseOut}
                    />
                )}
            </g>
        );
    } else {
        return <g></g>;
    }
}
export default Points;