import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SlideBox = ({ active, onClick, children }) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "8px",
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: active ? "#4CAF50" : "#F5F5F5",
        color: active ? "#ffffff" : "#333",
        boxShadow: active ? "0px 5px 15px rgba(76, 175, 80, 0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Typography variant="body1" align="center">
        {children}
      </Typography>
    </Paper>
  );
};

const Slides = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideClick = (path) => {
    setActiveSlide(path);
    navigate(path);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={6}>
        <Grid item>
          <SlideBox
            active={activeSlide === "/dashboard"}
            onClick={() => handleSlideClick("/dashboard")}
          >
            Dashboard
          </SlideBox>
        </Grid>
        <Grid item>
          <SlideBox
            active={activeSlide === "/topicwise"}
            onClick={() => handleSlideClick("/topicwise")}
          >
            Topic Wise
          </SlideBox>
        </Grid>
        <Grid item>
          <SlideBox
            active={activeSlide === "/compare"}
            onClick={() => handleSlideClick("/compare")}
          >
            Compare
          </SlideBox>
        </Grid>
        <Grid item>
          <SlideBox
            active={activeSlide === "/students"}
            onClick={() => handleSlideClick("/students")}
          >
            Students
          </SlideBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slides;
