import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react'
import * as d3 from 'd3';
import HorizontalBarPanel from "./HorizontalBarPanel";
import './HorizontalBar.scss';
import useElementSize from "../../hooks/useElementSize";



const HorizontalBar = ({
  data = [],
  setDataCB,
  width=400,
  height=300,
  margin=20,
}) => {
  const svgRef = useRef(null);

  // right: 0, top: 1, left: 2, bottom: 3
  const [rotateId, setRotateId] = useState(0);
  const [marginValue, setMarginValue] = useState({right: 20, top: 20, left: 20, bottom: 20});
  const [boxRef, { widthTEST, heightTEST }] = useElementSize();

  const xx = isNaN(widthTEST) ? 0 : widthTEST;
  console.log('>>> widthTEST', widthTEST);
  console.log('>>> heightTEST', heightTEST);

  // const ratioX = 520 / widthTEST;
  const ratioX = 520 / widthTEST;
  console.log('>>> ratioX', ratioX);
  const ratioY = 420 / heightTEST;

  const aspect = xx / heightTEST;

  const adjustedHeight = Math.ceil(xx / aspect);
  
  // Y-axis
  const y = useMemo(() => {
    return d3
      .scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d.Country; }))
      .padding(.1);
  }, [data]);     

  // idea for the customization
  // TODO: set the max for each ticks
  // TODO: change the margin for x- & y- axis
  // TODO: color change

  // const adjustedHeight = Math.ceil(xx / aspect);
  // TODO: WORKING NOW : let margin controlled by marginValue

  const [rotateAttr, setRotateAttr] = useState({
    widthLength: width + margin, // width + margin + 100,
    heightLength: height + margin ,  // height + margin + 100,
    svgTransform: `translate(${marginValue.right + 30},${marginValue.top})`, // `translate(${margin + 30},${margin / 2})`,
    axisY: y,
    axisX: null, // x - x cannot be initialized before rotateAttr useState
    axisXFunctionName: 'axisBottom',
    axisYFunctionName: 'axisLeft',
    axisYTransform: "translate(0," + height + ")",
    axisXTransform: "translate(10,10)rotate(45)",
    axisXLeftRotateTransform: null,
    rectX: function () { return x(0)},
    rectY: function(d) { return y(d.Country); },
    rectWidth: function(d) { return x(d.Value); },
    rectHeight: function () { return y.bandwidth()},
  })

  // X-axis

  const x = useMemo(() => {
    const values = data.map(ele => ele.Value)
    let xLinearDomainRange = [0, d3.max(values)];

    if (rotateId === 3 || rotateId === 2) {
      xLinearDomainRange = [d3.max(values), 0]
    } else {
      xLinearDomainRange = [0, d3.max(values)] // [0, 100]
    }
    return d3.scaleLinear()
    .domain(xLinearDomainRange)
    .range([ 0, width])
  }, [rotateId]);

  

  const rotateButtonGroupCB = (name) => {
    setRotateId(name)
  }

  const marginInputGroupCB = (name, value) => {
    setMarginValue((previous) => ({
      ...previous,
      [name]: value
    }));
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
      attr.svgTransform = `translate(${margin + 30 + (margin + 30) * ratioX},${margin / 2})`; // margin / 2
      attr.axisY = y;
      attr.axisX = x;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYFunctionName = 'axisLeft',
      attr.axisYTransform = "translate(0," + height + ")";
      attr.axisXTransform = "translate(10,10)rotate(45)";
      attr.axisXLeftRotateTransform = null;
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
      attr.axisYFunctionName = 'axisLeft',
      attr.axisYTransform = "translate(0, 0)";
      attr.axisXTransform = "translate(+10,-10)rotate(0)";
      attr.axisXLeftRotateTransform = null;
      attr.rectX = function(d) { return y(d.Country); };
      attr.rectY = function () { return x(0)};
      attr.rectWidth = function () { return y.bandwidth()};
      attr.rectHeight = function(d) { return x(d.Value); };
    }
    if (rotateId === 2) {
      attr.widthLength = width + margin + 100;
      attr.heightLength = height + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2})`;
      attr.axisY = y;
      attr.axisX = x;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYFunctionName = 'axisRight',
      attr.axisYTransform = "translate(0," + height + ")";
      attr.axisXTransform = "translate(10,10)rotate(45)";
      attr.axisXLeftRotateTransform = `translate(${width}, 0)`;
      attr.rectX = function (d) { return x(d.Value)};
      attr.rectY = function(d) { return y(d.Country); };
      attr.rectWidth = function(d) { return width - x(d.Value); };
      attr.rectHeight = function () { return y.bandwidth()};
    }
    if (rotateId === 3) {
      attr.widthLength = height + margin + 100;
      attr.heightLength = width + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2 + 60})`;
      attr.axisY = x;
      attr.axisX = y;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYFunctionName = 'axisRight',
      attr.axisYTransform = `translate(0, ${height+100})`;
      attr.axisXTransform = "translate(+10,0)rotate(0)";
      attr.axisXLeftRotateTransform = `translate(${width-100}, 0)`;
      attr.rectX = function(d) { return y(d.Country); }; // d.Country
      attr.rectY = function (d) { return x(d.Value) }; // height + 100 - x(d.Value)
      attr.rectWidth = function () { return y.bandwidth()};
      attr.rectHeight = function(d) { return height + 100 - x(d.Value) };
    }    

    setRotateAttr((previous) => ({
      ...previous,
      ...attr,
    }))    
  }; 

  // ISSUE: need a better calculation
    // need to set the limit on how big it can be increased in x, y direction
  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".test2").remove();
      const svg = d3
        .select(div)
        .attr("width", rotateAttr.widthLength)
        .attr("height", rotateAttr.heightLength)
        .attr("viewBox", `0 0 ${rotateAttr.widthLength * ratioX} ${rotateAttr.heightLength * ratioY}`) // rotateAttr.widthLength / rotateAttr.heightLength
        // .attr("viewBox", `0 0 ${rotateAttr.widthLength * ratioX} ${rotateAttr.heightLength * ratioY}`) // rotateAttr.widthLength / rotateAttr.heightLength
        .attr("preserveAspectRatio", "xMidYMid meet")
        // .classed("svg-content-responsive", true)
        // .classed("svg-container", true) //container class to make it responsive
        .append("g")
        .attr('class', 'test2')
        .attr("transform", rotateAttr.svgTransform);

      return svg;
    },
    [height, width, margin, rotateId, widthTEST, heightTEST]
  );

  const createGraph = (div) => {
    const svg = drawSvg(div);

    svg.append("g")
        .attr("transform", rotateAttr.axisYTransform)
        .call(d3[rotateAttr.axisXFunctionName](rotateAttr?.axisX ?? x
        .range([ 0, width])).tickSizeOuter(0))
        .selectAll("text")
          .attr("transform", rotateAttr.axisXTransform)
          .style("text-anchor", "end");
    svg.append("g")
        .call(d3[rotateAttr.axisYFunctionName](rotateAttr.axisY).tickSizeOuter(0))
        // ${width}
        .attr("transform", rotateAttr.axisXLeftRotateTransform);

    const rec = svg.selectAll("rect").data(data);

    rec
      .join("rect")
      // .enter()
      // .append("rect")
      .attr("class", "test")
      .attr("x", (d) => {
        // console.log('>>>>> 1', d);
        return rotateAttr.rectX(d);
      })
      .attr("y", (d) => (rotateAttr.rectY(d)))
      .attr("width", (d) => {
        // console.log('>>>>>', d);
        return rotateAttr.rectWidth(d);
  })
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
      <HorizontalBarPanel 
        rotateId={rotateId} rotateButtonGroupCB={rotateButtonGroupCB} 
        setDataCB={setDataCB}
        marginInputGroupCB={marginInputGroupCB} marginValue={marginValue}
       />
      <div className="horizontal-bar-right">
      {/* style={{ height: '300px' } , width : '400px' */}
      {/* <svg ref={svgRef} /> */}
        <div  ref={boxRef} className="svg-container"> 
        {/* ref={svgRef} */}
          <svg ref={svgRef}  />
        </div>
        
      </div>
    </div>
  )
}

export default HorizontalBar;