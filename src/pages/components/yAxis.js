import * as d3 from 'd3';


function YAxis(props){
    const { yScale, height, axisLable } = props;
    if(yScale){
        const ref = React.useRef();

        React.useEffect(() => {
            const axis = d3.axisLeft(yScale);
            d3.select(ref.current).call(axis);
        }, [yScale]);
        return <g ref={ref}>
        {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
        //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
        //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */
        }

            <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis