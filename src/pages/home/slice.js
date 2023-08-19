import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  popularArtistsPending: false,
  popularArtistsFulfilled: false,
  popularArtistsRejected: false,
  popularArtists: [],
  popularArtistsErrorMessage: null,
  popularAlbumsPending: false,
  popularAlbumsFulfilled: false,
  popularAlbumsRejected: false,
  popularAlbums: [],
  popularAlbumsErrorMessage: null,
  popularSongsPending: false,
  popularSongsFulfilled: false,
  popularSongsRejected: false,
  popularSongs: [],
  popularSongsErrorMessage: null,
};

export const getPopularArtists = createAsyncThunk(
  "home/getPopularArtists",
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

export const getPopularAlbums = createAsyncThunk(
  "home/getPopularAlbums",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await get(`/album/mostRatedAlbums`);

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

export const getPopularSongs = createAsyncThunk(
  "home/getPopularSongs",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await get(`/song/mostRatedSongs`);

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
      })
      .addCase(getPopularAlbums.pending, (state) => {
        state.popularAlbumsPending = true;
        state.popularAlbumsFulfilled = false;
        state.popularAlbumsRejected = false;
        state.popularAlbums = [];
      })
      .addCase(getPopularAlbums.fulfilled, (state, { payload }) => {
        state.popularAlbumsPending = false;
        state.popularAlbumsRejected = false;
        state.popularAlbumsFulfilled = true;
        state.popularAlbums = payload.mostRatedAlbums;
      })
      .addCase(getPopularAlbums.rejected, (state, { payload }) => {
        state.popularAlbumsPending = false;
        state.popularAlbumsRejected = true;
        state.popularAlbumsErrorMessage = payload.message;
      })
      .addCase(getPopularSongs.pending, (state) => {
        state.popularSongsPending = true;
        state.popularSongsFulfilled = false;
        state.popularSongsRejected = false;
        state.popularSongs = [];
      })
      .addCase(getPopularSongs.fulfilled, (state, { payload }) => {
        state.popularSongsPending = false;
        state.popularSongsRejected = false;
        state.popularSongsFulfilled = true;
        state.popularSongs = payload.mostRatedSongs;
      })
      .addCase(getPopularSongs.rejected, (state, { payload }) => {
        state.popularSongsPending = false;
        state.popularSongsRejected = true;
        state.popularSongsErrorMessage = payload.message;
      });
  },
});

export default homeReducer.reducer;
