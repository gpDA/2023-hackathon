import React, { useEffect, useState, useCallback, useRef } from 'react';
import { createColorPalette } from "../../utils/color";
import * as d3 from 'd3';
import StackedBarPanel from "./StackedBarPanel";
import './StackedBar.scss';


const StackedBar = ({
  data,
  label = { show: true, xLabel: "Percentage %", yLabel: "Fruit Type" },
  width = 400,
  height = 400,
  margin = 80,
  groupKey = "label",
  subgroups = ["value", "diff"],
  colorPalette = [],
  colorType = "Color-6"
}) => {
  const svgRef = useRef(null);
  const [graphAngle, setGraphAngle] = useState('left');

  const handleClick = (angle) => {
    setGraphAngle(angle)
  }

  const drawSvg = useCallback(
    (div) => {
      d3.selectAll(".test2").remove();
      const svg = d3
        .select(div)
        .attr("width", width + margin + 50)
        .attr("height", height + margin + 50)
        .append("g")
        .attr('class', 'test2')
        .attr("transform", `translate(${margin + 30},${margin / 2})`);
      return svg;
    },
    [height, width, margin, graphAngle]
  );

  const handleAxis = useCallback(
    (groups) => {
      const datanum = data.map((obj) =>
        Object.keys(obj).reduce(
          (acc, key) =>
            subgroups.includes(key) ? acc + parseInt(obj[key]) : acc + 0,
          0
        )
      );
      const domainMax = Math.max(...datanum);

      let y = d3.scaleBand().domain(groups).range([0, height]).padding([0.2]);
      let x = d3
        .scaleLinear()
        .domain([0, Math.ceil(domainMax)])
        .range([width, 0]);

      if (graphAngle === 'bottom' || graphAngle === 'top') {
        return [y, x]
      }
      return [x, y];
    },
    [width, height, subgroups, graphAngle]
  );

  const handleScale = useCallback(() => {
    const len = subgroups.length;
    const paletteRange =
      colorPalette.length > 0
        ? colorPalette
        : createColorPalette(colorType, len);
    const color = d3.scaleOrdinal().domain(subgroups).range(paletteRange);
    return color;
  }, [subgroups, colorPalette, colorType]);

  const createPieGraph = useCallback(
    (div) => {
      const svg = drawSvg(div);
      const groups = data.map((d) => d[groupKey]);
      const stackedData = d3.stack().keys(subgroups)(data);
      const [x, y] = handleAxis(groups);
      const color = handleScale();

      // y axis
      if (graphAngle === 'bottom' || graphAngle === 'top') {
        svg.append("g").call(d3.axisLeft(y));
      } else if (graphAngle === 'right') {
        svg
        .append("g")
        .attr("transform", `translate(${width}, 0)`)
        .call(d3.axisRight(y).tickSizeOuter(0));
      } else {
        svg
          .append("g")
          .call(d3.axisLeft(y).tickSizeOuter(0));
      }
      // x axis
      if (graphAngle === 'bottom') {
        svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
      } else if (graphAngle === 'top') {
        svg
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(d3.axisTop(x).tickSizeOuter(0));
      } else {
        svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
      }

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
          if (graphAngle === 'bottom') {
            return  y(d[1]);
          } else if (graphAngle === 'top') {
            return  y(d[1]) === 0 ? height - y(d[0]) : 0;
          } else {
            return  y(d.data[groupKey]);
          }
        })
        .attr("x", (d) => {
          if (graphAngle === 'bottom' || graphAngle === 'top') {
            return x(d.data[groupKey]);
          } else if (graphAngle === 'right') {
            return  width - x(d[0]);
          } else {
            return x(d[1]);
          }
        })
        .attr("width", (d) => {
          if (graphAngle === 'bottom' || graphAngle === 'top') {
            return x.bandwidth();
          } else {
            return x(d[0]) - x(d[1]);
          }
        })
        .attr("height", (d) => {
          if (graphAngle === 'bottom') {
            return y(d[0]) - y(d[1]);
          } else if (graphAngle === 'top') {
            return y(d[0]) - y(d[1]);
          } else {
            return y.bandwidth();
          }
        });

      label.show &&
        svg
          .append("text")
          .attr("class", "label")
          .attr("x", -height / 2)
          .attr("y", function() {
            if (graphAngle === 'right') {
              return width + 14;
            }
            return -margin / 1.3;
          })
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .text(function() {
            if (graphAngle === 'bottom' || graphAngle === 'top') {
              return label.xLabel;
            }
            return label.yLabel;
          });

      label.show &&
        svg
          .append("text")
          .attr("class", "label")
          .attr("x", width / 2)
          .attr("y", function() {
            if (graphAngle === 'top') {
              return 0;
            }
            return height + (margin * 2) / 2.5;
          })
          .attr("text-anchor", "middle")
          .text(function() {
            if (graphAngle === 'bottom' || graphAngle === 'top') {
              return label.yLabel;
            }
            return label.xLabel;
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
      graphAngle
    ]
  );

  useEffect(() => {
    if (svgRef.current) {
      createPieGraph(svgRef.current);
    }
  }, [svgRef, createPieGraph]);

  return (
    <div className="horizontal-stacked-bar-wrapper">
      <StackedBarPanel handleClick={handleClick} />
      <div className="horizontal-stacked-bar-right">
        <svg ref={svgRef} />
      </div>
    </div>
  );
}

export default StackedBar