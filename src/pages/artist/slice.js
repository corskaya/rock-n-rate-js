import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  artistPending: false,
  artistFulfilled: false,
  artistRejected: false,
  artist: {},
  artistErrorMessage: null,
  similarArtistsPending: false,
  similarArtistsFulfilled: false,
  similarArtistsRejected: false,
  similarArtists: [],
  similarArtistsErrorMessage: null,
};

export const getArtist = createAsyncThunk(
  "artists/getArtist",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/artist/${id}`);

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

export const getSimilarArtists = createAsyncThunk(
  "artists/getSimilarArtists",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/artist/similarArtists/${id}`);

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

const artistReducer = createSlice({
  name: "artistReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtist.pending, (state) => {
        state.artistPending = true;
        state.artistRejected = false;
        state.artistFulfilled = false;
      })
      .addCase(getArtist.fulfilled, (state, { payload }) => {
        state.artistPending = false;
        state.artistRejected = false;
        state.artistFulfilled = true;
        state.artist = payload.artist;
      })
      .addCase(getArtist.rejected, (state, { payload }) => {
        state.artistPending = false;
        state.artistRejected = true;
        state.artistErrorMessage = payload.message;
      })
      .addCase(getSimilarArtists.pending, (state) => {
        state.similarArtistsPending = true;
        state.similarArtistsRejected = false;
        state.similarArtists = [];
      })
      .addCase(getSimilarArtists.fulfilled, (state, { payload }) => {
        state.similarArtistsPending = false;
        state.similarArtistsRejected = false;
        state.similarArtistsFulfilled = true;
        state.similarArtists = payload.similarArtists;
      })
      .addCase(getSimilarArtists.rejected, (state, { payload }) => {
        state.similarArtistsPending = false;
        state.similarArtistsRejected = true;
        state.similarArtistsErrorMessage = payload.message;
      });
  },
});

export default artistReducer.reducer;
