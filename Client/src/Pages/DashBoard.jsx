import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import {
  PrimarySearchAppBar,
  ActionAreaCard,
  ContinentPieChart,
} from "../Components";

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
            {isMobile ? (
              <Grid item xs={12}>
                <Box
                  border="1px dotted black"
                  width="100%"
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <ContinentPieChart />
                </Box>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <Box width="100%">
                    <ActionAreaCard />
                  </Box>
                </Grid>
                <Grid item xs={13} md={6}>
                  <Box
                    width="100%"
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    // border={"1px solid black"}
                    flexDirection={"column"}
                  >
                    <ContinentPieChart user={user} />
                    <Typography variant="h6">Continent Sales</Typography>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      )}
    </>
  );

  return (
    <Box width="100%">
      {user ? <PrimarySearchAppBar /> : <span>Not Logged In</span>}
      {renderFeature()}
    </Box>
  );
};

export default DashBoard;
