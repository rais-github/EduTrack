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
    if (continentData.length > 0) {
      drawPieChart();
    }
  }, [continentData]);

  const drawPieChart = () => {
    // Clear existing SVG
    d3.select("#pie-chart-container").select("svg").remove();
    const { totalSales } = continentData[continentData.length - 1];
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

    const pie = d3.pie().value((d) => d.sales);
    pie.padAngle(0.01);
    pie.sort(null);
    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(89);

    const salesData = getSalesData();

    const arcs = chart
      .selectAll("arc")
      .data(pie(salesData))
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
          .attr("opacity", ".80")
          .attr("transform", "scale(1.05)");

        // Show tooltip
        const tooltip = d3.select("#tooltip");
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip
          .html(
            `<strong>${
              d["target"]["__data__"]["data"]["continent"]
            }</strong><br/>Sales: ${d["target"]["__data__"]["data"]["sales"]}
          ${
            d["target"]["__data__"]["data"]["sales"] > 0
              ? `(${(
                  (d["target"]["__data__"]["data"]["sales"] / totalSales) *
                  100
                ).toFixed(2)}%)`
              : ""
          }
          `
          )
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
      })

      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .duration("50")
          .attr("opacity", "1")
          .attr("transform", "scale(1)");

        // Hide tooltip
        d3.select("#tooltip").transition().duration(200).style("opacity", 0);
      });

    // Add tooltip
    d3.select("#pie-chart-container")
      .append("div")
      .attr("class", "tooltip")
      .attr("id", "tooltip")
      .style("opacity", 0);

    // Add title
  };

  const getSalesData = () => {
    return [
      {
        continent: "Africa",
        sales: continentData[continentData.length - 1]?.totalSales_Africa || 0,
      },
      {
        continent: "Asia",
        sales: continentData[continentData.length - 1]?.totalSales_Asia || 0,
      },
      {
        continent: "Europe",
        sales: continentData[continentData.length - 1]?.totalSales_Europe || 0,
      },
      {
        continent: "North America",
        sales:
          continentData[continentData.length - 1]?.totalSales_North_America ||
          0,
      },
      {
        continent: "South America",
        sales:
          continentData[continentData.length - 1]?.totalSales_South_America ||
          0,
      },
      {
        continent: "Antarctica",
        sales:
          continentData[continentData.length - 1]?.totalSales_Antarctica || 0,
      },
      {
        continent: "Australia",
        sales:
          continentData[continentData.length - 1]?.totalSales_Australia || 0,
      },
    ];
  };

  return (
    <div>
      <div id="pie-chart-container"></div>
      <ToastContainer />
    </div>
  );
};

export default ContinentPieChart;
