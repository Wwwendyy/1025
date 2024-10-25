import 'bootstrap/dist/css/bootstrap.css'

function Points(props) {
    const {data, xScale, yScale, height, width} = props;
    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return <g>
        {/* task:1. remove this comments and put your code here */
        data.map((d, index) => (
            <circle
                key={index}
                cx={xScale(d.tripdurationS)}
                cy={yScale(d.tripdurationE)}
                r={5}
                fill="steelblue"
                stroke="black"
                strokeWidth={1}
            />
        ))}

        </g>
    } else {
        return <g></g>
    }
}

export default Points