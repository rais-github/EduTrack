import { useSelector } from "react-redux";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { ActionAreaCard, ContinentPieChart } from "../Components";

const DashBoard = () => {
  const user = useSelector((state) => state.auth.user);
  const isMobile = useMediaQuery("(max-width:600px)");

  const renderFeature = () => (
    <>
      {user && (
        <Box
          style={{
            marginTop: "2rem",
            width: "90%",
            margin: "2rem auto",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignContent={"center"}
          >
            <Grid item xs={12} md={6}>
              <Box width="100%">
                <ActionAreaCard usedAs={"continent"} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                width="100%"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Typography variant="h6" style={{ marginBottom: "1rem" }}>
                  Continent Sales
                </Typography>
                {isMobile ? (
                  <Box
                    width="80%"
                    height="auto"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <ContinentPieChart user={user} />
                  </Box>
                ) : (
                  <ContinentPieChart user={user} />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );

  return <Box width="100%">{renderFeature()}</Box>;
};

export default DashBoard;
