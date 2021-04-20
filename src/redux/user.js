import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "getUser",
  initialState: {
    users: {}
  },
  reducers: {
    getUser: (state, actions) => {},
    setUser: (state, actions) => {
      const data = actions.payload;
      return { ...data };
    }
  }
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
