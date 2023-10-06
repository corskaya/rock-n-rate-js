import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  albumsPending: false,
  albumsFulfilled: false,
  albumsRejected: false,
  errorMessage: null,
  albums: [],
  albumsCount: 0,
  pageCount: 0,
  page: 1,
  filters: {
    searchTerm: "",
    genre: "All",
    rating: 0,
    year: "All",
    orderBy: "Latest",
  },
  toastStatus: {
    show: false,
    title: null,
    message: null,
    type: "info",
  },
};

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (filters, thunkAPI) => {
    try {
      const { data, status } = await get("/album", filters);

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

const albumsReducer = createSlice({
  name: "albumsReducer",
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
      .addCase(getAlbums.pending, (state) => {
        state.albumsPending = true;
        state.albumsRejected = false;
        state.albums = [];
        state.albumsCount = 0;
        state.pageCount = 0;
      })
      .addCase(getAlbums.fulfilled, (state, { payload }) => {
        state.albumsPending = false;
        state.albumsRejected = false;
        state.albumsFulfilled = true;
        state.albums = payload.albums;
        state.albumsCount = payload.count;
        state.pageCount = payload.pageCount;
      })
      .addCase(getAlbums.rejected, (state, { payload }) => {
        state.albumsPending = false;
        state.albumsRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export const { setFilters, goToPage } = albumsReducer.actions;

export default albumsReducer.reducer;
