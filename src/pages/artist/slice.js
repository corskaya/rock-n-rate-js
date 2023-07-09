import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/network";

const initialState = {
  artistPending: false,
  artistFulfilled: false,
  artistRejected: false,
  artist: {},
  errorMessage: null,
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

const artistReducer = createSlice({
  name: "artistReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtist.pending, (state) => {
        state.artistPending = true;
        state.artistRejected = false;
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
        state.errorMessage = payload.message;
      });
  },
});

export default artistReducer.reducer;
