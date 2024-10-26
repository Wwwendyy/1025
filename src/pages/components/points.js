import 'bootstrap/dist/css/bootstrap.css'

function Points(props) {
    const {data, xScale, yScale, height, width, hoveredStation, setTooltipData, setTooltipPos, onMouseEnter} = props;
    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
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
    if(data){
        return <g>
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
            {/* task:1. remove this comments and put your code here */
            data.map((d, index) => (
                <circle
                    key={index}
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
    } else {
        return <g></g>
    }
}

export default Points