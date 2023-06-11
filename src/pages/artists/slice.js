import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  artistsPending: false,
  artistsFulfilled: false,
  artistsRejected: false,
  artists: [],
  errorMessage: null,
};

export const getArtists = createAsyncThunk(
  "artists/getArtists",
  async (query, thunkAPI) => {
    try {
      const { data, status } = await get("/artist");

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

const artists = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.artistsPending = true;
        state.artistsRejected = false;
      })
      .addCase(getArtists.fulfilled, (state, { payload }) => {
        state.artistsPending = false;
        state.artistsRejected = false;
        state.artistsFulfilled = true;
        state.artists = payload;
      })
      .addCase(getArtists.rejected, (state, { payload }) => {
        state.artistsPending = false;
        state.artistsRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export default artists.reducer;
