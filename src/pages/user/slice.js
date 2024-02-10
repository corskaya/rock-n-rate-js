import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  userPending: false,
  userFulfilled: false,
  userRejected: false,
  user: null,
  userErrorMessage: null,
  toastStatus: {
    show: false,
    title: null,
    message: null,
    type: "info",
  },
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (username, thunkAPI) => {
    try {
      const { data, status } = await get(`/user/${username}`);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (e) {
      return e.response
        ? thunkAPI.rejectWithValue(e.response.data)
        : thunkAPI.rejectWithValue(e);
    }
  }
);

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.userPending = true;
        state.userFulfilled = false;
        state.userRejected = false;
        state.popularArtists = [];
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.userPending = false;
        state.userRejected = false;
        state.userFulfilled = true;
        state.user = payload.user;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.userPending = false;
        state.userRejected = true;
        state.userErrorMessage = payload.message;
      });
  },
});

export default userReducer.reducer;
