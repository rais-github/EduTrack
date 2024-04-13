import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice.js";
import { Box } from "@mui/material";

const DashBoard = () => {
  const [fetchAgain, setFetchAgain] = useState(false);

  const user = useSelector((state) => state.chat.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box width="100%">
      <h1>Hello Everone</h1>
    </Box>
  );
};

export default DashBoard;
