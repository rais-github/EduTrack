import React, { useEffect, useRef, useState } from "react";
import { MenuItem, Select, Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as d3 from "d3";

const CompareLineChart = ({ compareData }) => {
  const chartRef = useRef();
  const tooltipRef = useRef();
  const [viewMode, setViewMode] = useState("month");

  useEffect(() => {
    if (compareData.length > 0) {
      drawLineChart();
    }
  }, [compareData, viewMode]);

  const drawLineChart = () => {
    d3.select(chartRef.current).selectAll("*").remove();

    const margin = { top: 30, right: 30, bottom: 50, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const data =
      viewMode === "month" ? getSalesDataByMonth() : getSalesDataByYear();

    // X-axis: Months or Years
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat(
            viewMode === "month" ? d3.timeFormat("%b") : d3.timeFormat("%Y")
          )
      );

    // Y-axis: Sales
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.cumulativeSales)])
      .range([height, 0]);

    svg.append("g").call(d3.axisLeft(y));

    // Line
    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.cumulativeSales));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Tooltip setup
    const tooltip = d3
      .select(tooltipRef.current)
      .style("opacity", "0")
      .style("background-color", "white")
      .style("border", "solid 1px gray")
      .style("width", "200px")
      .style("padding", "5px");

    const path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Mouseover Interaction
    const bisectDate = d3.bisector((d) => d.date).left;

    path
      .on("mouseover", (event) => {
        const mouseX = d3.pointer(event)[0];
        const hoveredDate = bisectDate(data, x.invert(mouseX));
        const hoveredData = data[hoveredDate];

        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`Sale Amount: $${hoveredData.cumulativeSales}`)
          .style("left", event.pageX + 1 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));
  };

  function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Matches "YYYY-MM-DD"
    return regex.test(dateString);
  }

  function getSalesDataByMonth() {
    const salesData = {};
    const today = new Date();
    let idx = 0;
    compareData.forEach((sale) => {
      if (idx++ < 34) {
        if (isValidDate(sale.sale_date)) {
          const date = sale.sale_date ? new Date(sale.sale_date) : new Date();
          if (date <= today) {
            const year = date.getFullYear();
            const month = date.getMonth(); // (0-indexed)
            const key = `${year}-${month}`;

            if (!salesData[key]) {
              salesData[key] = { date: date, cumulativeSales: 0 };
            }
            salesData[key].cumulativeSales += sale.sale_amount;
          }
        } else {
          console.error("Invalid sale_date:", sale.sale_date);
        }
      }
    });

    return Object.values(salesData).sort((a, b) => a.date - b.date); // Sort by time
  }

  const getSalesDataByYear = () => {
    const salesData = {};
    compareData.forEach((sale) => {
      const year = new Date(sale.sale_date).getFullYear();
      const key = year.toString();

      if (!salesData[key]) {
        salesData[key] = { date: new Date(year, 0), cumulativeSales: 0 };
      }
      salesData[key].cumulativeSales += sale.sale_amount;
    });
    return Object.values(salesData).sort((a, b) => a.date - b.date);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Select
          value={viewMode}
          onChange={(event) => setViewMode(event.target.value)}
          size="small"
        >
          <MenuItem value="month">Compare by Month</MenuItem>
          <MenuItem value="year">Compare by Year</MenuItem>
        </Select>
      </Box>
      <Box id="line-chart-container">
        <Box className="tooltip" ref={tooltipRef} />
      </Box>
      <Box ref={chartRef}></Box>
      <ToastContainer />
    </Box>
  );
};

export default CompareLineChart;
