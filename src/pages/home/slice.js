import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  popularArtistsPending: false,
  popularArtistsFulfilled: false,
  popularArtistsRejected: false,
  popularArtists: [],
  popularArtistsErrorMessage: null,
};

export const getPopularArtists = createAsyncThunk(
  "artists/getPopularArtists",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await get(`/artist/mostRatedArtists`);

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

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPopularArtists.pending, (state) => {
        state.popularArtistsPending = true;
        state.popularArtistsFulfilled = false;
        state.popularArtistsRejected = false;
        state.popularArtists = [];
      })
      .addCase(getPopularArtists.fulfilled, (state, { payload }) => {
        state.popularArtistsPending = false;
        state.popularArtistsRejected = false;
        state.popularArtistsFulfilled = true;
        state.popularArtists = payload.mostRatedArtists;
      })
      .addCase(getPopularArtists.rejected, (state, { payload }) => {
        state.popularArtistsPending = false;
        state.popularArtistsRejected = true;
        state.popularArtistsErrorMessage = payload.message;
      });
  },
});

export default homeReducer.reducer;
