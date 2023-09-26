import React, { useMemo, useRef, useEffect, useCallback, useState } from "react";
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
  const [curveValue, setCurveValue] = useState(0.5);
  const [pointValue, setPointValue] = useState(8);
  const [lineWidthValue, setLineWidthValue] = useState(3);
  const [areaShade, setAreaShade] = useState(true);
  const [pointColor, setPointColor] = useState('#1C70C8');
  const [lineColor, setLineColor] = useState('#1C70C8');
  const [fillColor, setFillColor] = useState('#1C70C8');
  const [pointShapeType, setPointShapeType] = useState({ value: 'symbolCircle', label: 'symbolCircle'});
  const [pointVerticalShift, setPointVerticalShift] = useState(0); // TODO: vertical shift
  
  const handleRangeInput = (e, id) => {
    console.log('>>> handleRangeInput', e, id);
    if (id === 'curveArea') {
      setCurveValue(e.target?.value)
    }
    if (id === 'lineWidth') {
      setLineWidthValue(e.target?.value)
    }
    if (id === 'pointSize') {
      // console.log('>>> pointSize e.target.value', e.target?.value)
      setPointValue(e.target?.value)
    }
    if (id === 'pointShift') {
      console.log('>>> pointShift e.target.value', e.target?.value)
      setPointVerticalShift(e.target?.value)
    }    
  }

  const toggleCB = (isToggled) => {
    console.log('>>> isToggled', isToggled);
    setAreaShade(isToggled);

  }

  const handleColorPick = (id, color) => {
    if (id === 'point-color') {
      setPointColor(color.hex)
    }    
    if (id === 'line-color') {
      setLineColor(color.hex)
    }
    if (id === 'fill-color') {
      setFillColor(color.hex)
    }        
    
  }

  useEffect(() => {
    const parseTime = d3.timeParse("%Y");
    const newFormattedData = data.map((obj) => {
      return { date: parseTime(obj.data), value: obj.value };
    });
    setCopyData([...newFormattedData]);
  }, []);

  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".svg-wrapper").remove();

      const svg = d3
        .select(div)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr('class', 'svg-wrapper')
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

  const showArea = useCallback((svg, x, y) => {
      // Add the area
      svg
        .append("path")
        .datum(copyData)
        
        .attr("fill", fillColor)
        .attr(
          "d",
          d3
            .area().curve(d3.curveCardinal.tension(curveValue))
            .x((d) => x(d[xAxis]))
            .y0(y(0))
            .y1((d) => y(d[yAxis]))
        );
      return svg;
  }, [fillColor, copyData, curveValue])

  const createAreaGraph = useCallback(
    (div) => {
      let svg = drawSvg(div);
      const [x, y] = handleAxis();

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(d3.timeYear));
      svg.append("g").call(d3.axisLeft(y));
      // svg.append('line').classed('hoverLine', true)
      // svg.append('circle').classed('hoverPoint', true);
      svg.append("text").classed("hoverText", true);
      
      areaShade && showArea(svg, x, y);

      svg
        .append("path")
        .datum(copyData)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", lineWidthValue)
        .attr(
          "d",
          d3
            .line().curve(d3.curveCardinal.tension(curveValue))
            .x((d) => x(d[xAxis]))
            .y((d) => y(d[yAxis]))
        );

      // TODO: box area yes OR no

      svg
        .selectAll("myCircles")
        .data(copyData)
        .join(
          enter => enter.append("path")
              .attr("d", d3.symbol().type(d3[pointShapeType?.value ?? '']).size(pointValue * 20))
              .attr("transform", (d) => `translate(${x(d[xAxis])}, ${y(d[yAxis]) - pointVerticalShift})`)
              .attr("fill", pointColor)
              )
    },
    [handleAxis, height, drawSvg, copyData, xAxis, yAxis, pointVerticalShift]
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
      <AreaChartPanel
        curveValue={curveValue}
        pointValue={pointValue}
        lineWidthValue={lineWidthValue}
        pointVerticalShift={pointVerticalShift}
        pointColor={pointColor}
        lineColor={lineColor}
        fillColor={fillColor}
        handleColorPick={handleColorPick}
        handleRangeInput={handleRangeInput}
        pointShapeType={pointShapeType}
        pointShapeButtonGroupCB={setPointShapeType}
        toggleCB={toggleCB}
      />
    </div>
  );
};

export default AreaChart;
