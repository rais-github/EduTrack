import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { CompareDropCard, CompareLineChart } from "../index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Compare = () => {
  const [compareData, setCompareData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/sales");
        setCompareData(response.data);
      } catch (err) {
        toast.error("Error in fetching compare data", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <Container
      style={{ overflowX: "auto", background: "#f0f0f0", padding: "1rem" }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }} // Change flex direction based on screen size
        justifyContent="space-between"
        width="100%"
        minHeight="80vh"
      >
        <Box
          flex="1 1 100%"
          maxWidth={{ xs: "100%", sm: "30%" }} // Adjust max width based on screen size
          marginBottom={{ xs: "1rem", sm: 0 }} // Add bottom margin for small screens only
          minWidth="300px"
          padding="0 1rem"
        >
          <CompareDropCard compareData={compareData} />
        </Box>
        <Box flex="1 1 100%" maxWidth="100%" minWidth="300px" padding="0 2rem">
          <CompareLineChart compareData={compareData} />
        </Box>
      </Box>
    </Container>
  );
};

export default Compare;
