import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, del } from "../../utils/network";

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
  ratingsPending: false,
  ratingsFulfilled: false,
  ratingsRejected: false,
  ratings: [],
  ratingsErrorMessage: null,
  rateArtistPending: false,
  rateArtistFulfilled: false,
  rateArtistRejected: false,
  rateArtistErrorMessage: null,
  removeRatingPending: false,
  removeRatingFulfilled: false,
  removeRatingRejected: false,
  removeRatingErrorMessage: null,
  showRateModal: false,
  showRatingsModal: false,
  toastStatus: {
    show: false,
    title: null,
    message: null,
    type: "info",
  },
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

export const getRatings = createAsyncThunk(
  "artists/getRatings",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await get(`/artist/ratings/${id}`);

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

export const rateArtist = createAsyncThunk(
  "artists/rateArtist",
  async ({ id, rating }, thunkAPI) => {
    try {
      const { data, status } = await post(`/artist/rate/${id}`, { rating });

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
  "artists/removeRating",
  async (id, thunkAPI) => {
    try {
      const { data, status } = await del(`/artist/removeRating/${id}`);

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
  reducers: {
    setShowRateModal: (state, action) => {
      state.showRateModal = action.payload;
    },
    setShowRatingsModal: (state, action) => {
      state.showRatingsModal = action.payload;
    },
    setToastStatus: (state, action) => {
      state.toastStatus = action.payload;
    },
  },
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
      })
      .addCase(getRatings.pending, (state) => {
        state.ratingsPending = true;
        state.ratingsRejected = false;
        state.ratings = [];
      })
      .addCase(getRatings.fulfilled, (state, { payload }) => {
        state.ratingsPending = false;
        state.ratingsRejected = false;
        state.ratingsFulfilled = true;
        state.ratings = payload.ratings;
      })
      .addCase(getRatings.rejected, (state, { payload }) => {
        state.ratingsPending = false;
        state.ratingsRejected = true;
        state.ratingsErrorMessage = payload.message;
      })
      .addCase(rateArtist.pending, (state) => {
        state.rateArtistPending = true;
        state.rateArtistRejected = false;
        state.rateArtistFulfilled = false;
      })
      .addCase(rateArtist.fulfilled, (state, { payload }) => {
        state.rateArtistPending = false;
        state.rateArtistRejected = false;
        state.rateArtistFulfilled = true;
        state.artist = payload.artist;
        state.showRateModal = false;
      })
      .addCase(rateArtist.rejected, (state, { payload }) => {
        state.rateArtistPending = false;
        state.rateArtistRejected = true;
        state.rateArtistErrorMessage = payload.message;
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
        state.artist = payload.artist;
        state.showRateModal = false;
      })
      .addCase(removeRating.rejected, (state, { payload }) => {
        state.removeRatingPending = false;
        state.removeRatingRejected = true;
        state.removeRatingErrorMessage = payload.message;
      });
  },
});

export const { setShowRateModal, setShowRatingsModal, setToastStatus } =
  artistReducer.actions;

export default artistReducer.reducer;
