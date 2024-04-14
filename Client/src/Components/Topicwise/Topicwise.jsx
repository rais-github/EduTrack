import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ActionAreaCard } from "../index";
import { motion } from "framer-motion";

const Topicwise = () => {
  const [wasClickedArray, setWasClickedArray] = useState(Array(10).fill(false));

  const handleClick = (index) => {
    const newClickedArray = [...wasClickedArray];
    newClickedArray[index] = !newClickedArray[index];
    setWasClickedArray(newClickedArray);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={1}
      gap={1}
      style={{
        backgroundImage: "url('../../../public/topicwise-bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      minHeight="100vh"
    >
      <Typography variant="h4" color="primary" align="center">
        Visualize Our Online Courses Sale
      </Typography>
      <Box width="100%" maxWidth="1200px" margin="auto">
        <Box
          display={"grid"}
          gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          gap={3}
          justifyItems="center"
          width="100%"
        >
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <ActionAreaCard
                usedAs="topicwise"
                topicIndex={index}
                onClick={() => handleClick(index)}
                wasClicked={wasClickedArray[index]}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Topicwise;
