import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice.js";
import { Box } from "@mui/material";
import PrimarySearchAppBar from "../Components/DashBoared/PrimarySearchAppBar/PrimarySearchAppBar.jsx";

const DashBoard = () => {
  const [fetchAgain, setFetchAgain] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderChatComponents = () => <></>;

  return (
    <Box width="100%">
      {user ? <PrimarySearchAppBar /> : <span>Not Logged In</span>}
    </Box>
  );
};

export default DashBoard;
