import { StudentTable } from "../index";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import backgroundImage from "../../../public/student-bg.jpg";

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
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ overflowX: "auto" }}>
              <StudentTable students={students} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Student;
