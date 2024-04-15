import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as d3 from "d3";

const CompareBar = ({ compareData }) => {
  useEffect(() => {
    if (compareData.length > 0) {
      drawLineChart();
    }
  }, [compareData]);

  const drawLineChart = () => {
    d3.select("#line-chart-container").select("svg").remove();
  };

  const getSalesDataByMonth = () => {
    return [
      {
        month: "January",
        sales: [
          compareData[compareData.length - 1][month][0] || 999, //online
          compareData[compareData.length - 1][month][1] || 999, //classroom
        ],
      },
      {
        month: "February",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "March",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "April",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "May",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "June",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "July",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "August",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "September",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "October",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "November",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
      {
        month: "December",
        sales: [
          compareData[compareData.length - 1][month][0] || 999,
          compareData[compareData.length - 1][month][1] || 999,
        ],
      },
    ];
  };

  const getSalesDataByYear = () => {
    return [
      {
        year: 2021,
        sales: [
          compareData[compareData.length - 1][2021][0] || 999, //online
          compareData[compareData.length - 1][2021][1] || 999, //classroom
        ],
      },
      {
        year: 2022,
        sales: [
          compareData[compareData.length - 1][2022][0] || 999,
          compareData[compareData.length - 1][2022][1] || 999,
        ],
      },
      {
        year: 2023,
        sales: [
          compareData[compareData.length - 1][2023][0] || 999,
          compareData[compareData.length - 1][2023][1] || 999,
        ],
      },
      {
        year: 2024,
        sales: [
          compareData[compareData.length - 1][2024][0] || 999,
          compareData[compareData.length - 1][2024][1] || 999,
        ],
      },
    ];
  };

  return (
    <div>
      <div id="line-chart-container"></div>
      <ToastContainer />
    </div>
  );
};

export default CompareBar;
