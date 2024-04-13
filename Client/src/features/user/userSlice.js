import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export const userSlice = createSlice({
  name: "auth",
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
export const { setUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
