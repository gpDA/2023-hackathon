import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react'
import * as d3 from 'd3';
import BarPanel from "./BarPanel";
import styles from './Bar.module.scss';
import {createColorPalette} from '../utils/helper';
import { useSelector, useDispatch } from 'react-redux'



const Bar = ({
  width=400,
  height=300,
  margin=20,
  shouldDisplay= true
}) => {
  const {bar: {data, key: barKey, value: barValue}} = useSelector((state) => state.graph)
  const svgRef = useRef(null);

  // Y-axis
  const y = useMemo(() => {
    return d3
      .scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d[barKey]; }))
      .padding(.1);
  }, [data]);     

  // right: 0, top: 1, left: 2, bottom: 3
  const [rotateId, setRotateId] = useState(0);
  const [recColor, setRecColor] = useState('#1C70C8');
  const [interactiveTextColor, setInteractiveTextColor] = useState('#1C70C8');
  const [maxValue, setMaxValue] = useState(0);
  const [isInteractiveValue, setIsInteractiveValue] = useState(true);
  const [rotateAttr, setRotateAttr] = useState({
    widthLength: width + margin + 100,
    heightLength: height + margin + 100,
    svgTransform: `translate(${margin + 30},${margin / 2})`,
    axisY: y,
    axisX: null, // x - x cannot be initialized before rotateAttr useState
    axisXFunctionName: 'axisBottom',
    axisYFunctionName: 'axisLeft',
    axisYTransform: "translate(0," + height + ")",
    axisXTransform: "translate(10,10)rotate(45)",
    axisXLeftRotateTransform: null,
    rectX: function () { return x(0)},
    rectY: function(d) { return y(d[barKey]); },
    rectWidth: function(d) { return x(d[barValue]); },
    rectHeight: function () { return y.bandwidth()},
    test: function(d) { return y(d[barKey]) + y.bandwidth() / 2 + 10; },
  })

  const handleMaxValue = () => {
    const values = data.map(ele => ele[barValue])
    return d3.max(values) > maxValue || maxValue === -1 ? d3.max(values) : maxValue;
  }

  // X-axis
  const x = useMemo(() => {

    let xLinearDomainRange = [0, handleMaxValue()];

    if (rotateId === 3 || rotateId === 2) {
      xLinearDomainRange = [handleMaxValue(), 0];
    } else {
      xLinearDomainRange = [0, handleMaxValue()];
    }
    return d3.scaleLinear()
    .domain(xLinearDomainRange)
    .range([ 0, width])
  }, [data, rotateId, maxValue]);

  

  const rotateButtonGroupCB = (name) => {
    setRotateId(name)
  }

  const handleColorPick = (id, color) => {
    if (id === 'rec-color') {
      setRecColor(color.hex)
    }
    if (id === 'interactive-text-color') {
      setInteractiveTextColor(color.hex)
    }    
    
  }

  const maxValueCB = (e) => {
    setMaxValue(e.target.value);
  } 

  const toggleCB = (toggleState, id) => {
    if (id === 'max' && toggleState) {
      setMaxValue(-1);
    }
    if (id === 'interactive') {
      setIsInteractiveValue(toggleState);
    }
  }

  useEffect(() => {
    setRotateAttrHandler();
  }, [data, rotateId, maxValue, recColor, interactiveTextColor])

  const setRotateAttrHandler = () => {
    const attr = {};
    if (rotateId === 0) {
      attr.widthLength = width + margin + 100;
      attr.heightLength = height + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2})`;
      attr.axisY = y;
      attr.axisX = x;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYFunctionName = 'axisLeft',
      attr.axisYTransform = "translate(0," + height + ")";
      attr.axisXTransform = "translate(10,10)rotate(45)";
      attr.axisXLeftRotateTransform = null;
      attr.rectX = function () { return x(0)};
      attr.rectY = function(d) { return y(d[barKey]); };
      attr.rectWidth = function(d) { return x(d[barValue]); };
      attr.rectHeight = function () { return y.bandwidth()};
    }
    if (rotateId === 1) {
      attr.widthLength = height + margin + 100;
      attr.heightLength = width + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2 + 20})`;
      attr.axisY = x;
      attr.axisX = y;
      attr.axisXFunctionName = 'axisTop',
      attr.axisYFunctionName = 'axisLeft',
      attr.axisYTransform = "translate(0, 0)";
      attr.axisXTransform = "translate(+10,-10)rotate(0)";
      attr.axisXLeftRotateTransform = null;
      attr.rectX = function(d) { return y(d[barKey]); };
      attr.rectY = function () { return x(0)};
      attr.rectWidth = function () { return y.bandwidth()};
      attr.rectHeight = function(d) { return x(d[barValue]); };
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
      attr.rectX = function (d) { return x(d[barValue])};
      attr.rectY = function(d) { return y(d[barKey]); };
      attr.rectWidth = function(d) { return width - x(d[barValue]); };
      attr.rectHeight = function () { return y.bandwidth()};
    }
    if (rotateId === 3) {
      attr.widthLength = height + margin + 100;
      attr.heightLength = width + margin + 100;
      attr.svgTransform = `translate(${margin + 30},${margin / 2})`;
      attr.axisY = x;
      attr.axisX = y;
      attr.axisXFunctionName = 'axisBottom',
      attr.axisYFunctionName = 'axisLeft',
      attr.axisYTransform = `translate(0, ${height+100})`;
      attr.axisXTransform = "translate(+10,0)rotate(0)";
      attr.axisXLeftRotateTransform = `translate(0, 0)`;
      attr.rectX = function(d) { return y(d[barKey]); };
      attr.rectY = function (d) { return x(d[barValue]) };
      attr.rectWidth = function () { return y.bandwidth()};
      attr.rectHeight = function(d) { return height + 100 - x(d[barValue]) };
    }    

    setRotateAttr((previous) => ({
      ...previous,
      ...attr,
    }))    
  }; 

  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".svg-wrapper").remove();
      
      const svg = d3
        .select(div)
        .attr("width", rotateAttr.widthLength)
        .attr("height", rotateAttr.heightLength)
        .append("g")
        .attr('class', 'svg-wrapper')
        .attr("transform", rotateAttr.svgTransform);

      return svg;
    },
    [height, width, rotateAttr]
  );

  const mouseOverEvent = useCallback(
    (svg) => {
      svg.selectAll("rect")
      .on("mouseover", (event, d) => {
        svg
          .append("line")
          .attr("class", styles["valueLine"])
          .attr("y1", () => {
            if (rotateId === 0) {
              return 0;
            }
            if (rotateId === 1) {
              return x(d[barValue]);
            }
            if (rotateId === 2) {
              return 0;
            }
            if (rotateId === 3) {
              return x(d[barValue]);
            }           
          })
          .attr("x1", () => {
            if (rotateId === 0) {
              return x(d[barValue]);
            }
            if (rotateId === 1) {
              return 0;
            }
            if (rotateId === 2) {
              return x(d[barValue]);
            }
            if (rotateId === 3) {
              return 0;
            }
          })
          .attr("y2", () => {
            if (rotateId === 0) {
              return height;
            }
            if (rotateId === 1) {
              return x(d[barValue]);
            }
            if (rotateId === 2) {
              return height;
            }
            if (rotateId === 3) {
              return x(d[barValue]);
            }
          })
          .attr("x2", () => {
            if (rotateId === 0) {
              return x(d[barValue]);
            }
            if (rotateId === 1) {
              return height;
            }
            if (rotateId === 2) {
              return x(d[barValue]);
            }
            if (rotateId === 3) {
              return height;
            }
          });


        svg
          .append("text")
          .attr("class", "info")
          .attr("fill", interactiveTextColor)
          .attr("font-size", `18px`)

          .attr("y", () => {
            if (rotateId === 0) {
              return y(d[barKey]) + y.bandwidth() / 2 + 10;
            }
            if (rotateId === 1) {
              return x(d[barValue] + 10);
            }
            if (rotateId === 2) {
              return y(d[barKey]) + y.bandwidth() / 2 + 10;
            }
            if (rotateId === 3) {
              return x(d[barValue] + 10);
            }
  
          })
          .attr("x", () => {
            if (rotateId === 0) {
              return x(d[barValue] + 10);
            }
            if (rotateId === 1) {
              return y(d[barKey]) + y.bandwidth() / 2 + 10;
            }
            if (rotateId === 2) {
              return x(d[barValue] + 10);
            }
            if (rotateId === 3) {
              return y(d[barKey]) + y.bandwidth() / 2 + 10;
            }              
          })
          .attr("text-anchor", "middle")
          .text(() => {
            const value = d[barValue];
            return `${value}%`;
          })

      });      

    },
    [rotateAttr]
  );

  const mouseOutEvent = useCallback(
    (svg) => {
      svg.selectAll("rect")
      .on("mouseout", (event, d) => {
        svg.selectAll(`.${styles["valueLine"]}`).remove();
        svg.selectAll(".info").remove();
      })
    }, [rotateAttr]);  

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
        .attr("transform", rotateAttr.axisXLeftRotateTransform);

    const rec = svg.selectAll("rect").data(data);

    rec
      .join("rect")
      .attr("class", "rect")
      .attr("x", (d) => (rotateAttr.rectX(d)))
      .attr("y", (d) => (rotateAttr.rectY(d)))
      .attr("width", (d) => (rotateAttr.rectWidth(d)))
      .attr("height", (d) => (rotateAttr.rectHeight(d)))
      .attr("fill", recColor)

      isInteractiveValue && mouseOverEvent(svg);
      isInteractiveValue && mouseOutEvent(svg);
  }

  useEffect(() => {
    if (svgRef.current || data) {
      createGraph(svgRef.current);
    }
  }, [svgRef, createGraph, data]);

  return (
    <div className={"graph-wrapper"}>
      <div className={`svg-container ${shouldDisplay ? styles.bar_graph_with_panel : styles.bar_graph}`}>
        <svg ref={svgRef} />
      </div>
      {
        shouldDisplay &&
          <BarPanel 
            rotateId={rotateId} rotateButtonGroupCB={rotateButtonGroupCB} 
            recColor={recColor} interactiveTextColor={interactiveTextColor} handleColorPick={handleColorPick} 
            toggleCB={toggleCB}
            maxValue={maxValue}
            maxValueCB={maxValueCB}        
          />
      }
    </div>
  )
}

export default Bar;