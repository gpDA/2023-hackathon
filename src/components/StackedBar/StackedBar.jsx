import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { createColorPalette } from "../../utils/color";
import * as d3 from 'd3';
import StackedBarPanel from "./StackedBarPanel";
import styles from './StackedBar.module.scss';


const StackedBar = ({
  data,
  label = { show: true },
  width = 400,
  height = 400,
  margin = 80,
  groupKey = "label",
  colorPalette = [],
}) => {
  const subgroups = Object.keys(data[0]).slice(1);
  const minMaxVal = useMemo(() => {
    return data.map((obj) => Object.keys(obj).reduce((acc, key) => subgroups?.includes(key) ? acc + parseInt(obj[key]) : acc + 0, 0))
  }, [subgroups]);

  const svgRef = useRef(null);
  const [graphAngle, setGraphAngle] = useState('left');
  const [labels, setLabels] = useState({
    xLabel: "Percentage %",
    yLabel: "Fruit Type"
  })
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [rangeVal, setRangeVal] = useState(Math.max(...minMaxVal));
  const [colorType, setColorType] = useState({ value: 'Color-1', label: 'Color-1'});

  /* PANEL FUNCTIONS */
  const handleClick = (angle) => {
    setGraphAngle(angle)
  }
  const handleLabel = (type, value) => {
    if (type === "xLabel") {
      setLabels(prev => ({ ...prev, xLabel: value }));
    }
    if (type === "yLabel") {
      setLabels(prev => ({ ...prev, yLabel: value }));
    }
  }

  /* SVG functions */
  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".svg-content").remove();
      const svg = d3
        .select(div)
        .attr("width", width + margin + 50)
        .attr("height", height + margin + 50)
        .append("g")
        .attr('class', 'svg-content')
        .attr("transform", function() {
          if (graphAngle === 'right' || graphAngle === 'bottom') {
            return `translate(${margin - 30}, ${margin / 2})`;
          } else if (graphAngle === 'top') {
            return `translate(${margin - 30}, ${margin})`;
          }
          return `translate(${margin + 30},${margin / 2})`;
        });
      return svg;
    },
    [height, width, margin, graphAngle]
  );

  const handleAxis = useCallback(
    (groups) => {
      const domainMax = checked2 ? Math.max(...minMaxVal) : rangeVal;

      let x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
      let y = d3
        .scaleLinear()
        .domain([0, Math.ceil(domainMax)])
        .range([height, 0]);

      if (graphAngle === 'bottom' || graphAngle === 'top') {
        return [y, x]
      }
      return [x, y];
    },
    [width, height, graphAngle, rangeVal, minMaxVal]
  );

  const handleScale = useCallback(() => {
    const len = subgroups.length;
    const paletteRange =
      colorPalette.length > 0
        ? colorPalette
        : createColorPalette(colorType.value ?? "");
    const color = d3.scaleOrdinal().domain(subgroups).range(paletteRange);
    return color;
  }, [subgroups, colorPalette, colorType]);

  const handleXAxis = useCallback((svgContent, x, y) => {
      // x axis
      if (graphAngle === 'bottom') {
        svgContent
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
      } else if (graphAngle === 'top') {
        svgContent
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(d3.axisTop(x).tickSizeOuter(0));
      } else {
        svgContent
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
      }
  }, [height, graphAngle]);

  const handleYAxis = useCallback((svgContent, x, y) => {
    if (graphAngle === 'bottom' || graphAngle === 'top') {
      svgContent
        .append("g")
        .attr("transform", `translate(${width}, 0)`)
        .call(d3.axisRight(y).tickSizeOuter(0));
    } else if (graphAngle === 'right') {
      svgContent
      .append("g")
      .attr("transform", `translate(${width}, 0)`)
      .call(d3.axisRight(y).tickSizeOuter(0));
    } else {
      svgContent
        .append("g")
        .call(d3.axisLeft(y).tickSizeOuter(0));
    }
  }, [width, graphAngle]);


  const createPieGraph = useCallback(
    (div) => {
      const svg = drawSvg(div);
      const groups = data.map((d) => d[groupKey]);
      const stackedData = d3.stack().keys(subgroups)(data);
      const color = handleScale();

      const [x, y] = handleAxis(groups);
      // x axis
      handleXAxis(svg, x, y);
      // y axis
      handleYAxis(svg, x, y);

      // adding bars
      svg
        .append("g")
        .selectAll("g")
        .data(stackedData)
        .join("g")
        .attr("fill", (d) => color(d.key))
        .selectAll("rect")
        .data((d) => d)
        .join("rect")
        .attr("y", (d) => {
          if (graphAngle === 'top' || graphAngle === 'bottom') {
            return y(d.data[groupKey]);
          }
          return y(d[1]);
        })
        .attr("x", (d) => {
          if (graphAngle === 'top' || graphAngle === 'bottom') {
            return x(d[1]);
          }
          return x(d.data[groupKey]);
        })
        .attr("width", (d) => {
          if (graphAngle === 'top' || graphAngle === 'bottom') {
            return x(d[0]) - x(d[1]);
          }
          return x.bandwidth();
        })
        .attr("height", (d) => {
          if (graphAngle === 'top' || graphAngle === 'bottom') {
            return y.bandwidth();
          }
          return y(d[0]) - y(d[1]);
        })
        .on('mouseover', function(event, d) {
          // hover
          if (checked) {
            d3.select(this).transition()
              .duration('50')
              .attr('opacity', '.85')

            svg.append('text')
              .attr('class', 'hover-text')
              .attr('x',  function() {
                if (graphAngle === 'top' || graphAngle === 'bottom') {
                  return x(d[1]);
                }
                return x(d.data[groupKey]);
              })
              .attr('y', function() {
                if (graphAngle === 'top' || graphAngle === 'bottom') {
                  return y(d.data[groupKey]);
                }
                return y(d[1]);
              })
              .text(d[1] - d[0])
          }
        })
        .on('mouseout', function(d, i) {
          d3.select(this).transition()
          .duration('50')
          .attr('opacity', '1')

          svg.selectAll('.hover-text').remove();
        })

      // labels
      label.show &&
        svg
          .append("text")
          .attr("class", "label")
          .attr("x", -height / 2 )
          .attr("y", function() {
            if (graphAngle === 'right' || graphAngle === 'bottom' || graphAngle === 'top') {
              return width + margin;
            }
            return -margin / 1.3;
          })
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .text(function() {
            if (graphAngle === 'bottom' || graphAngle === 'top') {
              return labels.yLabel;
            }
            return labels.xLabel;
          });

      label.show &&
        svg
          .append("text")
          .attr("class", "label")
          .attr("x", width / 2)
          .attr("y", function() {
            if (graphAngle === 'top') {
              return -margin + 30;
            }
            return height + (margin * 2) / 2.5;
          })
          .attr("text-anchor", "middle")
          .text(function() {
            if (graphAngle === 'bottom' || graphAngle === 'top') {
              return labels.xLabel;
            }
            return labels.yLabel;
          });
    },
    [
      drawSvg,
      handleAxis,
      handleScale,
      height,
      subgroups,
      groupKey,
      label,
      margin,
      width,
      graphAngle,
      labels,
      checked
    ]
  );

  useEffect(() => {
    if (svgRef.current) {
      createPieGraph(svgRef.current);
    }
  }, [svgRef, createPieGraph]);

  return (
    <div className="graph-wrapper">
      <div className="svg-container">
        <svg ref={svgRef} />
      </div>
      <StackedBarPanel 
        handleClick={handleClick} 
        handleLabel={handleLabel} 
        labels={labels}
        hover={{ checked, setChecked, checked2, setChecked2 }}
        range={{ minMaxVal: Math.max(...minMaxVal), rangeVal, setRangeVal }}
        setColorType={setColorType}
        colorType={colorType}
      />
    </div>
  );
}

export default StackedBar