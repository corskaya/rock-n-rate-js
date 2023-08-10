import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, del } from "../../utils/network";

const initialState = {
  albumPending: false,
  albumFulfilled: false,
  albumRejected: false,
  album: {},
  albumErrorMessage: null,
  similarAlbumsPending: false,
  similarAlbumsFulfilled: false,
  similarAlbumsRejected: false,
  similarAlbums: [],
  similarAlbumssErrorMessage: null,
  rateAlbumPending: false,
  rateAlbumFulfilled: false,
  rateAlbumRejected: false,
  rateAlbumErrorMessage: null,
  removeRatingPending: false,
  removeRatingFulfilled: false,
  removeRatingRejected: false,
  removeRatingErrorMessage: null,
  showRateModal: false,
};

export const getAlbum = createAsyncThunk(
  "albums/getAlbum",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/album/${id}`);

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

export const getSimilarAlbums = createAsyncThunk(
  "albums/getSimilarAlbums",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/album/similarAlbums/${id}`);

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

export const rateAlbum = createAsyncThunk(
  "albums/rateAlbum",
  async ({ id, rating }, thunkAPI) => {
    try {
      const { data, status } = await post(`/album/rate/${id}`, { rating });

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
  "albums/removeRating",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await del(`/album/removeRating/${id}`);

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

const albumReducer = createSlice({
  name: "albumReducer",
  initialState,
  reducers: {
    setShowRateModal: (state, action) => {
      state.showRateModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlbum.pending, (state) => {
        state.albumPending = true;
        state.albumRejected = false;
        state.albumFulfilled = false;
      })
      .addCase(getAlbum.fulfilled, (state, { payload }) => {
        state.albumPending = false;
        state.albumRejected = false;
        state.albumFulfilled = true;
        state.album = payload.album;
      })
      .addCase(getAlbum.rejected, (state, { payload }) => {
        state.albumPending = false;
        state.albumRejected = true;
        state.albumErrorMessage = payload.message;
      })
      .addCase(getSimilarAlbums.pending, (state) => {
        state.similarAlbumsPending = true;
        state.similarAlbumsRejected = false;
        state.similarAlbums = [];
      })
      .addCase(getSimilarAlbums.fulfilled, (state, { payload }) => {
        state.similarAlbumsPending = false;
        state.similarAlbumsRejected = false;
        state.similarAlbumsFulfilled = true;
        state.similarAlbums = payload.similarAlbums;
      })
      .addCase(getSimilarAlbums.rejected, (state, { payload }) => {
        state.similarAlbumsPending = false;
        state.similarAlbumsRejected = true;
        state.similarAlbumssErrorMessage = payload.message;
      })
      .addCase(rateAlbum.pending, (state) => {
        state.rateAlbumPending = true;
        state.rateAlbumRejected = false;
        state.rateAlbumFulfilled = false;
      })
      .addCase(rateAlbum.fulfilled, (state, { payload }) => {
        state.rateAlbumPending = false;
        state.rateAlbumRejected = false;
        state.rateAlbumFulfilled = true;
        state.album = payload.album;
        state.showRateModal = false;
      })
      .addCase(rateAlbum.rejected, (state, { payload }) => {
        state.rateAlbumPending = false;
        state.rateAlbumRejected = true;
        state.rateAlbumErrorMessage = payload.message;
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
        state.album = payload.album;
        state.showRateModal = false;
      })
      .addCase(removeRating.rejected, (state, { payload }) => {
        state.removeRatingPending = false;
        state.removeRatingRejected = true;
        state.removeRatingErrorMessage = payload.message;
      });
  },
});

export const { setShowRateModal } = albumReducer.actions;

export default albumReducer.reducer;
