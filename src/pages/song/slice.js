import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, del } from "../../utils/network";

const initialState = {
  songPending: false,
  songFulfilled: false,
  songRejected: false,
  song: {},
  songErrorMessage: null,
  similarSongsPending: false,
  similarSongsFulfilled: false,
  similarSongsRejected: false,
  similarSongs: [],
  similarSongssErrorMessage: null,
  rateSongPending: false,
  rateSongFulfilled: false,
  rateSongRejected: false,
  rateSongErrorMessage: null,
  removeRatingPending: false,
  removeRatingFulfilled: false,
  removeRatingRejected: false,
  removeRatingErrorMessage: null,
  showRateModal: false,
  toastStatus: {
    show: false,
    title: null,
    message: null,
    type: "info",
  },
};

export const getSong = createAsyncThunk(
  "songs/getSong",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/song/${id}`);

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

export const getSimilarSongs = createAsyncThunk(
  "songs/getSimilarSongs",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/song/similarSongs/${id}`);

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

export const rateSong = createAsyncThunk(
  "songs/rateSong",
  async ({ id, rating }, thunkAPI) => {
    try {
      const { data, status } = await post(`/song/rate/${id}`, { rating });

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

export const removeRating = createAsyncThunk(
  "songs/removeRating",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await del(`/song/removeRating/${id}`);

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

const songReducer = createSlice({
  name: "songReducer",
  initialState,
  reducers: {
    setShowRateModal: (state, action) => {
      state.showRateModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSong.pending, (state) => {
        state.songPending = true;
        state.songRejected = false;
        state.songFulfilled = false;
      })
      .addCase(getSong.fulfilled, (state, { payload }) => {
        state.songPending = false;
        state.songRejected = false;
        state.songFulfilled = true;
        state.song = payload.song;
      })
      .addCase(getSong.rejected, (state, { payload }) => {
        state.songPending = false;
        state.songRejected = true;
        state.songErrorMessage = payload.message;
      })
      .addCase(getSimilarSongs.pending, (state) => {
        state.similarSongsPending = true;
        state.similarSongsRejected = false;
        state.similarSongs = [];
      })
      .addCase(getSimilarSongs.fulfilled, (state, { payload }) => {
        state.similarSongsPending = false;
        state.similarSongsRejected = false;
        state.similarSongsFulfilled = true;
        state.similarSongs = payload.similarSongs;
      })
      .addCase(getSimilarSongs.rejected, (state, { payload }) => {
        state.similarSongsPending = false;
        state.similarSongsRejected = true;
        state.similarSongssErrorMessage = payload.message;
      })
      .addCase(rateSong.pending, (state) => {
        state.rateSongPending = true;
        state.rateSongRejected = false;
        state.rateSongFulfilled = false;
      })
      .addCase(rateSong.fulfilled, (state, { payload }) => {
        state.rateSongPending = false;
        state.rateSongRejected = false;
        state.rateSongFulfilled = true;
        state.song = payload.song;
        state.showRateModal = false;
      })
      .addCase(rateSong.rejected, (state, { payload }) => {
        state.rateSongPending = false;
        state.rateSongRejected = true;
        state.rateSongErrorMessage = payload.message;
      })
      .addCase(removeRating.pending, (state) => {
        state.removeRatingPending = true;
        state.removeRatingRejected = false;
        state.removeRatingFulfilled = false;
      })
      .addCase(removeRating.fulfilled, (state, { payload }) => {
        state.removeRatingPending = false;
        state.removeRatingRejected = false;
        state.removeRatingFulfilled = true;
        state.song = payload.song;
        state.showRateModal = false;
      })
      .addCase(removeRating.rejected, (state, { payload }) => {
        state.removeRatingPending = false;
        state.removeRatingRejected = true;
        state.removeRatingErrorMessage = payload.message;
      });
  },
});

export const { setShowRateModal } = songReducer.actions;

export default songReducer.reducer;
