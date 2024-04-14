import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as d3 from "d3";

const TopicPieChart = ({ course }) => {
  const tipCourse = course;
  course = course.split(" ").join("");
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const response = await axios.get("/api/sales");
        const data = response.data;
        setTopicData(data);
      } catch (error) {
        console.error(error);
        toast.error("Error Fetching Data", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };

    fetchTopicData();
  }, []);

  useEffect(() => {
    if (topicData.length > 0) {
      drawPieChart();
    }
  }, [topicData]);

  const drawPieChart = () => {
    // Clear existing SVG
    d3.select("#pie-chart-container").select("svg").remove();
    const currentTopic = `totalSales_${course}`;
    const topicSale = topicData[topicData.length - 1][currentTopic];
    const { totalSales } = topicData[topicData.length - 1];

    // Calculate radius based on container width
    const containerWidth = document.getElementById(
      "pie-chart-container"
    ).offsetWidth;
    const radius = Math.min(containerWidth, window.innerHeight) / 3;

    // Create SVG container
    const svg = d3
      .select("#pie-chart-container")
      .append("svg")
      .attr("viewBox", `0 0 ${radius * 2} ${radius * 2}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create a pie arc based on the data
    const pie = d3.pie().value((d) => d.sales);

    // Define arc
    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Generate arcs
    const dummyData = [
      { topic: tipCourse, sales: topicSale },
      { topic: "Online Course", sales: totalSales - topicSale },
    ]; // One entry for your topic, another for remaining space
    const arcs = pie(dummyData);

    // Append arcs to SVG
    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))
      .attr("transform", `translate(${radius},${radius})`);

    // Add legend
    const legend = svg
      .selectAll(".legend")
      .data(arcs)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${radius * 2},${i * 20})`);

    legend
      .append("rect")
      .attr("x", -15)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (d, i) => color(i));

    legend
      .append("text")
      .attr("x", -24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("fill", "white")
      .style("font-size", "0.7rem")
      .text((d) => d.data.topic);

    // Add tooltip
    const tooltip = d3
      .select("#pie-chart-container")
      .append("div")
      .attr("class", "tooltip")
      .attr("id", "tooltip")
      .style("opacity", 0);

    svg
      .selectAll("path")
      .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`${d.data.topic}: ${d.data.sales}`)
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px")
          .style("color", "white");
      })
      .on("mouseout", function () {
        tooltip.transition().duration(500).style("opacity", 0);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div id="pie-chart-container"></div>
      <ToastContainer />
    </div>
  );
};

export default TopicPieChart;
