import React, { useRef, useEffect, useCallback, useState } from "react";
import * as d3 from "d3";
import AreaChartPanel from "./AreaChartPanel";
import styles from './AreaChart.module.scss';


const AreaChart = ({
  data,
  width = 400,
  height = 400,
  margin = { left: 100, bottom: 100, top: 50, right: 50 },
  xAxis = "date",
  yAxis = "value"
  // tooltip={show: true, text: '<div>Portfolio Value: $%value%</div>'}
}) => {
  const svgRef = useRef(null);
  const [copyData, setCopyData] = useState([]);

  useEffect(() => {
    const parseTime = d3.timeParse("%Y");
    const newFormattedData = data.map((obj) => {
      return { date: parseTime(obj.data), value: obj.value };
    });
    setCopyData([...newFormattedData]);
  }, []);

  const drawSvg = useCallback(
    (div) => {
      const svg = d3
        .select(div)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.right})`);
      return svg;
    },
    [height, width, margin]
  );

  const handleAxis = useCallback(() => {
    let x, y;
    // const domainMax = (axis) => Math.max.apply(Math, data.map(function(o) { return o[axis]; }))
    // const scaleDomain = domain.length > 0 ? domain : createDomain(data, xAxis);
    const reformatDates = copyData.map((obj) => obj[xAxis]);
    x = d3
      .scaleTime()
      .domain(d3.extent(reformatDates))
      .range([0, width])
      .nice();

    y = d3
      .scaleLinear()
      .domain([0, d3.max(copyData, (d) => +d[yAxis])])
      .range([height, 0]);
    return [x, y];
  }, [width, height, copyData, xAxis, yAxis]);

  const createAreaGraph = useCallback(
    (div) => {
      const svg = drawSvg(div);
      const [x, y] = handleAxis();

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(d3.timeYear));
      svg.append("g").call(d3.axisLeft(y));
      // svg.append('line').classed('hoverLine', true)
      // svg.append('circle').classed('hoverPoint', true);
      svg.append("text").classed("hoverText", true);

      // Add the area
      svg
        .append("path")
        .datum(copyData)
        .attr("fill", "#cce5df")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .area()
            .x((d) => x(d[xAxis]))
            .y0(y(0))
            .y1((d) => y(d[yAxis]))
        );

      svg
        .append("path")
        .datum(copyData)
        .attr("fill", "none")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 2)
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d[xAxis]))
            .y((d) => y(d[yAxis]))
        );

      svg
        .selectAll("myCircles")
        .data(copyData)
        .join("circle")
        .attr("fill", "yellow")
        .attr("stroke", "none")
        .attr("cx", (d) => x(d[xAxis]))
        .attr("cy", (d) => y(d[yAxis]))
        .attr("r", 3);
    },
    [handleAxis, height, drawSvg, copyData, xAxis, yAxis]
  );

  useEffect(() => {
    if (svgRef.current) {
      createAreaGraph(svgRef.current);
    }
  }, [svgRef, createAreaGraph]);

  return (
    <div className="graph-wrapper">
      <div className="svg-container">
        <svg ref={svgRef} />
      </div>
      <AreaChartPanel />
    </div>
  );
};

export default AreaChart;
