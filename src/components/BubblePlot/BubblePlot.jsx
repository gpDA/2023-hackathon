import React, { useState, useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import BubblePlotPanel from "./BubblePlotPanel";
import styles from './BubblePlot.module.scss';
import { sampleData } from '../utils/data'


const BubblePlot = ({
  data = sampleData,
  width = 500,
  height = 300,
  dataKey,
  value,
  colorPalette,
  colorType,
  margin = 50,
  style,
  text,
  arc,
  tooltip,
  donut,
  graphAngle = "bottom",
}) => {
  const svgRef = useRef(null);
  const [legendMoveFlag, setLegendMoveFlag] = useState(false);

  const drawSvg = useCallback(
    (div) => {
        d3.selectAll(".svg-wrapper").remove();

      const svgExtraMargin = 100;
      const svgExtraMarginOnTheX = 200; // to render lengends appropriately
      const gExtraMargin = 25;

      // TODO: brainstorm about giving width to the div not
      const svg = d3
        .select(div)
        .attr("width", width  + margin + svgExtraMargin + svgExtraMarginOnTheX)
        .attr("height", height + margin + svgExtraMargin)           
        .append("g")     
        .attr('class', 'svg-wrapper')
        .attr("transform", `translate(${margin + gExtraMargin},${margin + gExtraMargin})`);
      return svg;
    },
    [height, width, margin]
  );


  const createBubbleGraph = useCallback(
    (div) => {
      const svg = drawSvg(div);

      // TODO: Create legend
      // TODO: legend position group button selector
      // TODO: title change
      // TODO: x- & y- axis title change
      // TODO: search and show the bubble with some highlighting effect
      // TODO: zoom-in on double click ? or something else
      // TODO: Change the color for the continent 

      // Add X axis
      // population
      const x = d3.scaleLinear()
        .domain([0, 350]) // 350
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("class", "test1")
        .call(d3.axisBottom(x));
    
      // Add Y axis
      const y = d3.scaleLinear()
        .domain([50, 25 * 1000])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));
    
      // Add a scale for bubble size
      const z = d3.scaleLinear()
        .domain([1300, 2000])
        .range([0, 40]);
    
      // Add a scale for bubble color
      const myColor = d3.scaleOrdinal()
        .domain(["Asia", "Europe", "S. America", "Africa", "N. America", "C. America"])
        .range(d3.schemeSet2);

      const showTooltip = (event, d) => {
        tooltip
        .transition()
        .duration(200)
        tooltip
          .style("opacity", 1)
          .html(`Country: ${d.country} Fifa ranking: ${d.fifaRanking}`)
          .style("background-color", "black")
          .style("border-radius", "5px")
          .style("padding", "10px")
          .style("color", "white")
          .style("left", (event.x + 10) + "px") // (event.x)/2  + "px"
          .style("top", (event.y + 20) + "px") // (event.y)/2+30
      }

      const moveTooltip = (event, d) => {
        tooltip
        .style("left", (event.x + 10) + "px")
        .style("top", (event.y + 20) + "px")        
      }

      const hideTooltip = () => {
        tooltip
        .transition()
        .duration(200)
        .style("opacity", 0)        
      }

      function dragstarted(event, d) {
        setLegendMoveFlag(true);
        event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
      }

      function dragged(event, d) {
        const legends = d3.selectAll(".legends")
        const translateValue = legends?.attr("transform") ?? '';
        const [x, y] = translateValue.substring(translateValue.indexOf("(")+1, translateValue.indexOf(")")).split(",");

        legends
          .attr("transform", "translate(" + [ +x + event.dx, +y + event.dy ] + ")")
      }
      
      function dragended() {
        d3.select(this).classed("dragging", false);
      }

      // Add dots
      svg.append('g')
        .attr("class", "main-graph")
        .selectAll("dot")
        .data(data)
        .join("circle")
          .attr("cx", d => x(d.population))
          .attr("cy", d => y(d.gdp))
          .attr("r", d => z(d.fifaPoints))
          .style("fill", d => myColor(d.continent))
          .style("opacity", "0.7")
          .attr("stroke", "white")
          .style("stroke-width", "2px")
          // -3- Trigger the functions
          .on("mouseover", showTooltip )
          .on("mousemove", moveTooltip )
          .on("mouseleave", hideTooltip )          
          // .append("text") // TODO: learn the diff between .append vs. .join
          // .attr("class", "textOnCircle")
          // .text((d) => d.country)

      const wrapperTooltip = d3.select(".svg-container")
      const tooltip = wrapperTooltip.append("div")
      tooltip
          .style("position", "absolute")
        .append("div")
          .style("position", "absolute")
          .style("visibility", "hidden")
          // .attr("class", "tooltip")
          .style("background-color", "red")
          .style("border", "solid")
          .style("border-width", "1px")
          .style("border-radius", "5px")
          .style("padding", "10px")
    
      // Add one dot in the legend for each name.
      const numberOfItems = 5;
      const startMargin = 20;
      
      const g = svg.append('g')
        .attr("class", "legends").attr("transform", "translate(0,0)")

      g
        .selectAll("test123")
        .data(['S. America', 'Europe', 'N. America', 'Africa', 'Asia', 'C. America'])
        .enter()
        .append("circle")
          .attr("cx", width + 30)
          .attr("cy", function(d,i){ return height - numberOfItems * startMargin  + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
          .attr("r", 7)
          .style("fill", function(d){ return myColor(d)})
          
      // TODO: wrap around the g 
      // Add one dot in the legend for each name.
      g
        .selectAll("test")
        .data(['S. America', 'Europe', 'N. America', 'Africa', 'Asia', 'C. America'])
        .enter()
        .append("text")
          .attr("x", width + 50)
          .attr("y", function(d,i){ return  height - numberOfItems * startMargin  + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
          .style("fill", function(d){ return myColor(d)})
          .text(function(d){ return d})
          .attr("text-anchor", "left")
          .style("alignment-baseline", "middle")

      g
          .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)
            )

        svg.append("g")
          .append("text")
          .attr("class", "label")
          .attr("x", -height / 2 )
          .attr("y", function() {
            return -margin;
          })
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .text(function() {
            return 'Gross domestic product';
          });

        svg.append("g")
          .append("text")
          .attr("class", "label")
          .attr("x", width / 2)
          .attr("y", function() {
            return -20;
          })
          .attr("text-anchor", "middle")
          .text(function() {
            return "do rich and more populated countries play soccer better";
          });          

      svg.append("g")
          .append("text")
          .attr("class", "label")
          .attr("x", width / 2)
          .attr("y", function() {
            const yLabelMargin = -10;
            return height + margin + yLabelMargin;
          })
          .attr("text-anchor", "middle")
          .text(function() {
            return 'population';
          });

    },
    [
      drawSvg,
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
      <BubblePlotPanel
        legendMoveFlag={legendMoveFlag}
        setLegendMoveFlag={setLegendMoveFlag}
       />
    </div>
  );
};

export default BubblePlot;