import React, { useEffect, useCallback, useRef } from 'react'
import * as d3 from 'd3';
import HorizontalBarPanel from "./HorizontalBarPanel";
import './HorizontalBar.scss';

const data = [
  { Country: 'US', Value: 100 },
  { Country: 'S. Korea', Value: 85 },
  { Country: 'Italy', Value: 72 },
  { Country: 'Japan', Value: 80 },
]

const HorizontalBar = ({
  width=400,
  height=300,
  margin=20,
}) => {
  const svgRef = useRef(null);

  const drawSvg = useCallback(
    (div) => {
      const svg = d3
        .select(div)
        .attr("width", width + margin + 50)
        .attr("height", height + margin + 50)
        .append("g")
        .attr("transform", `translate(${margin + 30},${margin / 2})`);
      return svg;
    },
    [height, width, margin]
  );

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(.1);

  const createGraph = (div) => {
    const svg = drawSvg(div);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");
    svg.append("g")
        .call(d3.axisLeft(y))

    svg.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0) )
        .attr("y", function(d) { return y(d.Country); })
        .attr("width", function(d) { return x(d.Value); })
        .attr("height", y.bandwidth() )
        .attr("fill", "#69b3a2")
  }

  useEffect(() => {
    if (svgRef.current) {
      createGraph(svgRef.current);
    }
  }, [svgRef, createGraph]);

  return (
    <div className="horizontal-bar-wrapper">
      <HorizontalBarPanel />
      <div className="horizontal-bar-right">
        <svg ref={svgRef} />
      </div>
    </div>
  )
}

export default HorizontalBar