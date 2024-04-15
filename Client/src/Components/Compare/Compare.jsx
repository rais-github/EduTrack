import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CompareDropCard, CompareBar } from "../index";
import { toast, ToastContainer } from "react-toastify";
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
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2}
      width={"100%"}
      height={"90vh"}
      border={"5px solid black"}
      overflow="hidden"
    >
      <Box marginInlineStart={1}>
        <CompareDropCard compareData={compareData} />
      </Box>
      <Box display={"flex"} flex={1} border={"2px dotted red"}>
        <CompareBar compareData={compareData} />
      </Box>
    </Box>
  );
};

export default Compare;
