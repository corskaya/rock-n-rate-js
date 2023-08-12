import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  songsPending: false,
  songsFulfilled: false,
  songsRejected: false,
  errorMessage: null,
  songs: [],
  songsCount: 0,
  pageCount: 0,
  page: 1,
  filters: {
    searchTerm: "",
    genre: "All",
    rating: 0,
    year: "All",
    orderBy: "Latest",
  },
};

export const getSongs = createAsyncThunk(
  "songs/getSongs",
  async (filters, thunkAPI) => {
    try {
      const { data, status } = await get("/song", filters);

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

const songsReducer = createSlice({
  name: "songsReducer",
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
      .addCase(getSongs.pending, (state) => {
        state.songsPending = true;
        state.songsRejected = false;
        state.songs = [];
        state.songsCount = 0;
        state.pageCount = 0;
      })
      .addCase(getSongs.fulfilled, (state, { payload }) => {
        state.songsPending = false;
        state.songsRejected = false;
        state.songsFulfilled = true;
        state.songs = payload.songs;
        state.songsCount = payload.count;
        state.pageCount = payload.pageCount;
      })
      .addCase(getSongs.rejected, (state, { payload }) => {
        state.songsPending = false;
        state.songsRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export const { setFilters, goToPage } = songsReducer.actions;

export default songsReducer.reducer;
