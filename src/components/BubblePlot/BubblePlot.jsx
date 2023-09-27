import React, { useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import BubblePlotPanel from "./BubblePlotPanel";
import styles from './BubblePlot.module.scss';
import M from "minimatch";

const sampleData = [
    // FIFA RANKING
    // Show Ranking
    {
        "country": "Argentina", // Country
        "continent": "S. America",
        "salary": 297.1, // Salary unit K
        "fifaPoints": 1843.73, // Total Points
        "population": 45.81, // Population unit M
        "fifaRanking": 1,
    },
    {
        "country": "France", // Country
        "continent": "Europe",
        "salary": 1300, // Salary unit K
        "fifaPoints": 1840.76, // Total Points
        "population": 67.75, // Population unit M
        "fifaRanking": 2,
    },
    {
        "country": "Brazil", // Country
        "continent": "S. America",
        "salary": 744, // Salary unit K
        "fifaPoints": 1837.61, // Total Points
        "population": 214.3, // Population unit M
        "fifaRanking": 3,
    },
    {
        "country": "England", // Country
        "continent": "Europe",
        "salary": 3173.2, // Salary unit K
        "fifaPoints": 1450.34, // Total Points
        "population": 55.98, // Population unit M
        "fifaRanking": 4,
    },
    {
        "country": "Belgium", // Country
        "continent": "Europe",
        "salary": 305.3, // Salary unit K
        "fifaPoints": 1792.64, // Total Points
        "population": 11.59, // Population unit M
        "fifaRanking": 5,
    },
    {
        "country": "Croatia", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1747.83, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 6,
    },
    {
        "country": "Netherlands", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1747.83, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 7,
    },
    {
        "country": "Portugal", // Country NOT DONE
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1728.5, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 8,
    },
    {
        "country": "Italy", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1727.37, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 9,
    },
    {
        "country": "Spain", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1710.72, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 10,
    },
    {
        "country": "USA", // Country
        "continent": "N. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1678.71, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 11,
    },
    {
        "country": "Mexico", // Country
        "continent": "N. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1661.46, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 12,
    },
    {
        "country": "Morocco", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1658.32, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 13,
    },
    {
        "country": "Switzerland", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1654.11, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 14,
    },
    {
        "country": "Germany", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1637.9, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 15,
    },
    {
        "country": "Colombia", // Country
        "continent": "S. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1628.6, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 16,
    },
    {
        "country": "Uruguay", // Country
        "continent": "S. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1626.51, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 17,
    },
    {
        "country": "Denmark", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1606.84, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 18,
    },
    {
        "country": "Japan", // Country
        "continent": "Asia",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1605.2, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 19,
    },
    {
        "country": "Senegal", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1597.01, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 20,
    },
    {
        "country": "IR Iran", // Country
        "continent": "Asia",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1561.26, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 21,
    },
    {
        "country": "Peru", // Country
        "continent": "S. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1551.91, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 22,
    },
    {
        "country": "Sweden", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1538.84, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 23,
    },
    {
        "country": "Ukraine", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1538.42, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 24,
    },
    {
        "country": "Austria", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1537.36, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 25,
    },
    {
        "country": "Korea Republic", // Country
        "continent": "Asia",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1533.01, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 26,
    },
    {
        "country": "Australia", // Country
        "continent": "Asia",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1531.72, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 27,
    },
    {
        "country": "Serbia", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1529.49, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 28,
    },
    {
        "country": "Tunisia", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1525.23, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 29,
    },
    {
        "country": "Poland", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1524.61, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 30,
    },
    {
        "country": "Scotland", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1522.67, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 31,
    },
    {
        "country": "Hungary", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1517.73, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 32,
    },
    {
        "country": "Wales", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1510.52, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 33,
    },
    {
        "country": "Algeria", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1509.5, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 34,
    },
    {
        "country": "Egypt", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1508.93, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 35,
    },
    {
        "country": "Chile", // Country
        "continent": "S. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1504.75, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 36,
    },
    {
        "country": "Czechia", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1500.44, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 37,
    },
    {
        "country": "Ecuador", // Country
        "continent": "S. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1497.66, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 38,
    },
    {
        "country": "Russia", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1495.53, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 39,
    },
    {
        "country": "Nigeria", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1488.86, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 40,
    },
    {
        "country": "Cameroon", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1475.6, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 41,
    },
    {
        "country": "Turkiye", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1475.4, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 42,
    },
    {
        "country": "Norway", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1470.88, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 43,
    },
    {
        "country": "Canada", // Country
        "continent": "N. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1458.58, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 44,
    },
    {
        "country": "Panama", // Country
        "continent": "C. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1452.25, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 45,
    },
    {
        "country": "Costa Rica", // Country
        "continent": "C. America",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1452.1, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 46,
    },
    {
        "country": "Romania", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1448.02, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 47,
    },
    {
        "country": "Slovakia", // Country
        "continent": "Europe",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1442.84, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 48,
    },
    {
        "country": "Mali", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1441.72, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 49,
    },
    {
        "country": "Cote d'lvoire", // Country
        "continent": "Africa",
        "salary": 220.3, // Salary unit K // est. data
        "fifaPoints": 1437.89, // Total Points
        "population": 3.90, // Population unit M
        "fifaRanking": 50,
    },                                                                                                                                                                                                     
]

const BubblePlot = ({
  data = sampleData,
  width = 500,
  height = 300,
  dataKey,
  value,
  colorPalette,
  colorType,
  margin,
  style,
  text,
  arc,
  tooltip,
  donut
}) => {
  const svgRef = useRef(null);

  const drawSvg = useCallback(
    (div) => {
        d3.selectAll(".svg-wrapper").remove();

      const svg = d3
        .select(div)
        .attr("width", width  + 100)
        .attr("height", height + 100)           
        .append("g")     
        .attr('class', 'svg-wrapper')
        .attr("transform", `translate(${50},${50})`);
      return svg;
    },
    [height, width]
  );

  const handleUniqDataLen = useCallback(() => {
    const uniqueArr = [...new Set(data.map((el) => el[dataKey]))];
    return uniqueArr.length;
  }, [data, dataKey]);

  const handleScale = useCallback(() => {
    const len = handleUniqDataLen();
    const paletteRange =
      colorPalette.length > 0
        ? colorPalette
        : createColorPalette(colorType, len);
    const ordScale = d3
      .scaleOrdinal()
      .domain(createDomain(data, dataKey))
      .range(paletteRange);
    return ordScale;
  }, [data, dataKey, handleUniqDataLen, colorPalette, colorType]);

  const createPie = useCallback(() => {
    const pie = d3.pie().value((d) => d[value]);
    return pie(data);
  }, [data, value]);

  const handleRadius = useCallback(() => {
    if (margin) {
      return Math.min(width, height) / 2 - margin;
    }
    return Math.min(width, height) / 2;
  }, [width, height, margin]);

  const handleConerRadius = useCallback(() => {
    const outerRadius = height / 2 - 30;
    const innerRadius = outerRadius / 3;
    const limitRange = (outerRadius - innerRadius) / 2;

    if (arc.cornerRadius >= limitRange) return limitRange;
    return arc.cornerRadius;
  }, [height, arc]);

  const handleText = useCallback(
    (svg, data, arcGenerator, outerArc, radius) => {
      svg
        .selectAll("arc")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "arcText")
        .text((d) => d.data[dataKey])
        .attr("transform", function (d) {
          if (text.location === "outside") {
            const pos = outerArc.centroid(d);
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
          }
          return `translate(${arcGenerator.centroid(d)})`;
        })
        .style("text-anchor", function (d) {
          if (text.location === "outside") {
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            return midangle < Math.PI ? "start" : "end";
          }
          return text.textAnchor;
        });
    },
    [dataKey, text]
  );

  const createTooltip = useCallback(() => {
    const tooltipDiv = d3
      .select(".App")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("opacity", 0);
    return tooltipDiv;
  }, []);

  const handleInnerRadius = useCallback(
    (radius) => {
      if (donut.show) {
        return radius < donut.innerRadius ? radius : donut.innerRadius;
      }
      return 0;
    },
    [donut]
  );

  const handleTextLine = useCallback(
    (svg, data, arcGenerator, outerArc, radius) => {
      svg
        .selectAll("allPolylines")
        .data(data)
        .enter()
        .append("polyline")
        .attr("class", "textLine")
        .style("fill", "none")
        .attr("points", function (d) {
          const posA = arcGenerator.centroid(d); // line insertion in the slice
          const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
          const posC = outerArc.centroid(d); // Label position = almost the same as posB
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
          return [posA, posB, posC];
        });
    },
    []
  );

  const createBubbleGraph = useCallback(
    (div) => {
      const svg = drawSvg(div);

    //   svg
    // //   .append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //   .append("g")
        // .attr("transform", `translate(${margin.left},${margin.top})`);
    
    //Read the data
    // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv").then( function(data) {
    
      // Add X axis
      const x = d3.scaleLinear()
        .domain([0, 120])
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("class", "test1")
        .call(d3.axisBottom(x));
    
      // Add Y axis
      const y = d3.scaleLinear()
        .domain([100, 3500])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));
    
      // Add a scale for bubble size
      const z = d3.scaleLinear()
        .domain([1300, 2000])
        .range([0, 40]);
    
      // Add a scale for bubble color
      const myColor = d3.scaleOrdinal()
        .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
        .range(d3.schemeSet2);
    
      // Add dots
      svg.append('g')
        .selectAll("dot")
        .data(data)
        .join("circle")
          .attr("cx", d => x(d.population))
          .attr("cy", d => y(d.salary))
          .attr("r", d => z(d.fifaPoints))
          .style("fill", d => myColor(d.continent))
          .style("opacity", "0.7")
          .attr("stroke", "white")
          .style("stroke-width", "2px")
    
    //   )
    
    },
    [
      handleTextLine,
      handleInnerRadius,
      dataKey,
      tooltip,
      createTooltip,
      drawSvg,
      createPie,
      handleScale,
      handleRadius,
      text,
      arc,
      handleConerRadius,
      handleText
    ]
  );

  useEffect(() => {
    if (svgRef.current) {
      createBubbleGraph(svgRef.current);
    }
  }, [svgRef, createBubbleGraph]);

  return (
    <div className="graph-wrapper">
      <div className="svg-container">
        <svg ref={svgRef} />
      </div>
      <BubblePlotPanel />
    </div>
  );
};

export default BubblePlot;