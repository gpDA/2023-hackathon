import React, { useEffect, useRef } from 'react'

import {
    axisBottom,
    axisLeft,
    ScaleBand,
    scaleBand,
    ScaleLinear,
    scaleLinear,
    select
  } from "d3";

const AxisBottom = ({scale, transform}) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
          select(ref.current).call(axisBottom(scale));
        }
      }, [scale]);
    
    return <g ref={ref} transform={transform} />;
}

const AxisLeft = ({scale, transform}) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
          select(ref.current).call(axisLeft(scale));
        }
      }, [scale]);
    
    return <g ref={ref} transform={transform} />;
}

const Bars = ({data, height, scaleX, scaleY}) => {
    return (
        <>
          {data.map(({ value, label }) => (
            <rect
              key={`bar-${label}`}
              x={scaleX(label)}
              y={scaleY(value)}
              width={scaleX.bandwidth()}
              height={height - scaleY(value)}
              fill="teal"
            />
          ))}
        </>
      );
}

// TODO: change the color of a bar (+ individually)
// TODO: ultimately, make a storybook so that the user can play around with props
// TODO: make it scale based on the screen size
// TODO: change the x- y- axis tick rotation (+ individually)

// TODO: onClick ... onHover event for the each ticks
// TODO: hover over the bar and see what happens (+ individually)
// TODO: max Value
// TODO: enableLabel
// 
const VerticalBar = ({ data }) => {
    const margin = { top: 10, right: 0, bottom: 20, left: 30 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
  
    const scaleX = scaleBand()
      .domain(data.map(({ label }) => label))
      .range([0, width])
      .padding(0.5);
    const scaleY = scaleLinear()
      .domain([0, Math.max(...data.map(({ value }) => value))])
      .range([height, 0]);
  
    return (
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
        </g>
      </svg>
    );
}

export default VerticalBar