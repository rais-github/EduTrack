import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import CircularProgressWithLabel from "../subComponents/CircularProgressWithLabel";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import NumbersIcon from "@mui/icons-material/Numbers";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const StudentList = ({ selectedStudent }) => {
  const {
    firstName = "John",
    lastName = "Doe",
    coursesEnrolled = [],
    contact_info = {},
    age = 18,
    id = 0,
  } = selectedStudent || {};

  const {
    visibility = "not specified",
    email = "@gmail.com",
    phone = "9893388277",
  } = contact_info;
  const [open, setOpen] = useState(true);

  const topicName1 = coursesEnrolled[0]?.Subject || "Mathematics";
  const topicName2 = coursesEnrolled[1]?.Subject || "Physics";
  const progress1 = coursesEnrolled[0]?.progress || 10;
  const progress2 = coursesEnrolled[1]?.progress || 10;

  const data = [
    { icon: <AlternateEmailIcon />, label: "Email", value: email },
    { icon: <PhoneIphoneIcon />, label: "Phone", value: phone },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(200, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemText sx={{ my: 0, mx: 0 }}>
                <span style={{ color: "white" }}>{id}</span>
              </ListItemText>
              <ListItemText
                sx={{ my: 0 }}
                primary={`${firstName} ${lastName}`}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>

            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <NumbersIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={`Age: ${age}`}
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Private Credentials"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Email, Phone, Enrolled Courses, Course Progress"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDownIcon
                  sx={{
                    mr: -1,
                    opacity: 1,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {visibility == "Instructor" &&
                open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      secondary={item.value}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
              <Divider />
              <span className="ml-5">Enrolled Courses</span>
              <div className=" ml-5 flex items-center justify-center">
                <ListItemText
                  primary={topicName1}
                  secondary={<CircularProgressWithLabel value={progress1} />}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                ></ListItemText>
                {topicName1 !== topicName2 && (
                  <>
                    <ListItemText
                      primary={topicName2}
                      secondary={
                        <CircularProgressWithLabel value={progress2} />
                      }
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </>
                )}
              </div>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default StudentList;
