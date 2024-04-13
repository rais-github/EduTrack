import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export const chatSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const userInfo = action.payload;

      state.user = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
  },
});

// Export the generated actions
export const { setUser } = chatSlice.actions;

// Export the reducer
export default chatSlice.reducer;
