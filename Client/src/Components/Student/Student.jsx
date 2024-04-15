import { StudentList, StudentTable } from "../index";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
const Student = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        toast.error("Error in loading students");
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      width="100%"
      bgcolor={"coral"}
    >
      <StudentTable students={students} />
    </Box>
  );
};

export default Student;
