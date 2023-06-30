import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  artistsPending: false,
  artistsFulfilled: false,
  artistsRejected: false,
  errorMessage: null,
  artists: [],
  artistsCount: 0,
  pageCount: 0,
  page: 1,
  filters: {
    searchTerm: "",
    genre: "All",
    subGenre: "All",
    rating: 0,
    year: "All",
    orderBy: "Latest",
  },
};

export const getArtists = createAsyncThunk(
  "artists/getArtists",
  async (filters, thunkAPI) => {
    try {
      const { data, status } = await get("/artist", filters);

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

const artistsReducer = createSlice({
  name: "artistsReducer",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    goToPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.artistsPending = true;
        state.artistsRejected = false;
        state.artists = [];
        state.artistsCount = 0;
        state.pageCount = 0;
      })
      .addCase(getArtists.fulfilled, (state, { payload }) => {
        state.artistsPending = false;
        state.artistsRejected = false;
        state.artistsFulfilled = true;
        state.artists = payload.artists;
        state.artistsCount = payload.count;
        state.pageCount = payload.pageCount;
      })
      .addCase(getArtists.rejected, (state, { payload }) => {
        state.artistsPending = false;
        state.artistsRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export const { setFilters, goToPage } = artistsReducer.actions;

export default artistsReducer.reducer;
