import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as d3 from "d3";

const ContinentPieChart = () => {
  const [continentData, setContinentData] = useState([]);

  useEffect(() => {
    const fetchContinentData = async () => {
      try {
        const response = await axios.get("/api/sales");
        const data = response.data;
        setContinentData(data);
      } catch (error) {
        console.error(error);
        toast.error("Error Fetching Data", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };

    fetchContinentData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  useEffect(() => {
    // Create pie chart when continentData changes
    if (continentData.length > 0) {
      drawPieChart();
    }
  }, [continentData]);

  const drawPieChart = () => {
    // Clear existing SVG
    d3.select("#pie-chart-container").select("svg").remove();

    const width = 510;
    const height = 510;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select("#pie-chart-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.sale_amount);

    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcs = chart
      .selectAll("arc")
      .data(pie(continentData))
      .enter()
      .append("g");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .on("mouseover", function (d, i) {
        d3.select(this)
          .transition()
          .duration("50")
          .attr("opacity", ".85")
          .attr("transform", "scale(1.1)");
      })
      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .duration("50")
          .attr("opacity", "1")
          .attr("transform", "scale(1)");
      });

    // arcs
    //   .append("text")
    //   .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    //   .attr("text-anchor", "middle")
    //   .text((d) => d.data.continent)
    //   .attr("fill", "white")
    //   .style("font-size", "12px")
    //   .style("pointer-events", "none");

    // Add tooltips
    // arcs.append("title").text((d) => d.data.continent);

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 20)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Continent wise course sales");
  };

  return (
    <div>
      <div id="pie-chart-container"></div>
      <ToastContainer />
    </div>
  );
};

export default ContinentPieChart;
