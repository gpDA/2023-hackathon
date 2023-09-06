import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react'
import * as d3 from 'd3';
import HorizontalBarPanel from "./HorizontalBarPanel";
import './HorizontalBar.scss';



const HorizontalBar = ({
  data = [],
  setDataCB,
  width=400,
  height=300,
  margin=20,
}) => {
  const svgRef = useRef(null);

  // Y-axis
  const y = useMemo(() => {
    return d3
      .scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d.Country; }))
      .padding(.1);
  }, [data]);     


  // X-axis
  const x = d3.scaleLinear()
  .domain([0, 100])
  .range([ 0, width]);

  // idea for the customization
  // TODO: set the max for each ticks
  // TODO: change the margin for x- & y- axis
  // TODO: color change

  // right: 0, top: 1, left: 2, bottom: 3
  const [rotateId, setRotateId] = useState(0);
  const [rotateAttr, setRotateAttr] = useState({
    widthLength: width + margin + 100,
    heightLength: height + margin + 100,
    svgTransform: `translate(${margin + 30},${margin / 2})`,
    axisY: y,
    axisX: x,
    axisXFunctionName: 'axisBottom',
    axisYTransform: "translate(0," + height + ")",
    axisXTransform: "translate(10,10)rotate(45)",
    rectX: function () { return x(0)},
    rectY: function(d) { return y(d?.Country); },
    rectWidth: function(d) { return x(d?.Value); },
    rectHeight: function () { return y.bandwidth()},
  })

  const rotateButtonGroupCB = (name) => {
    setRotateId(name)
  }

  useEffect(() => {
    // rotateCB();
    setRotateAttrHandler();
  }, [rotateId])

  const setRotateAttrHandler = () => {
    const attr = {};
    if (rotateId === 0) {
      attr.widthLength = width + margin + 100;
      attr.heightLength = height + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2})`;
      attr.axisY = y;
      attr.axisX = x;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYTransform = "translate(0," + height + ")";
      attr.axisXTransform = "translate(10,10)rotate(45)";
      attr.rectX = function () { return x(0)};
      attr.rectY = function(d) { return y(d.Country); };
      attr.rectWidth = function(d) { return x(d.Value); };
      attr.rectHeight = function () { return y.bandwidth()};
    }
    if (rotateId === 1) {
      attr.widthLength = height + margin + 100;
      attr.heightLength = width + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2 + 60})`;
      attr.axisY = x;
      attr.axisX = y;
      attr.axisXFunctionName = 'axisTop',
      attr.axisYTransform = "translate(0, 0)";
      attr.axisXTransform = "translate(+10,-10)rotate(0)";
      attr.rectX = function(d) { return y(d.Country); };
      attr.rectY = function () { return x(0)};
      attr.rectWidth = function () { return y.bandwidth()};
      attr.rectHeight = function(d) { return x(d.Value); };
    }    

    setRotateAttr((previous) => ({
      ...previous,
      ...attr,
    }))    
  }; 

  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".test2").remove();
      const svg = d3
        .select(div)
        .attr("width", rotateAttr.widthLength)
        .attr("height", rotateAttr.heightLength)
        .append("g")
        .attr('class', 'test2')
        .attr("transform", rotateAttr.svgTransform);

      return svg;
    },
    [height, width, margin]
  ); 

  const createGraph = (div) => {
    const svg = drawSvg(div);

    svg.append("g")
        .attr("transform", rotateAttr.axisYTransform)
        .call(d3[rotateAttr.axisXFunctionName](rotateAttr.axisX).tickSizeOuter(0))
        .selectAll("text")
          .attr("transform", rotateAttr.axisXTransform)
          .style("text-anchor", "end");
    svg.append("g")
        .call(d3.axisLeft(rotateAttr.axisY).tickSizeOuter(0));

    const rec = svg.selectAll("rect").data(data);

    rec
      .join("rect")
      // .enter()
      // .append("rect")
      .attr("class", "test")
      .attr("x", (d) => (rotateAttr.rectX(d)))
      .attr("y", (d) => (rotateAttr.rectY(d)))
      .attr("width", (d) => (rotateAttr.rectWidth(d)))
      .attr("height", (d) => (rotateAttr.rectHeight(d)))
      .attr("fill", "#69b3a2")
  }

  useEffect(() => {
    if (svgRef.current || data) {
      createGraph(svgRef.current);
    }
  }, [svgRef, createGraph, data]);

  return (
    <div className="horizontal-bar-wrapper">
      <HorizontalBarPanel rotateId={rotateId} rotateButtonGroupCB={rotateButtonGroupCB} setDataCB={setDataCB} />
      <div className="horizontal-bar-right">
        <svg ref={svgRef} />
      </div>
    </div>
  )
}

export default HorizontalBar;