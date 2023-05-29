import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/network";

const initialState = {
  registerPending: false,
  registerFulfilled: false,
  registerRejected: false,
  errorMessage: null,
};

export const register = createAsyncThunk(
  "registerReducer/register",
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await post("/user/register", formData);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (e) {
      console.log("registerReducer/register err:", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.registerPending = true;
        state.registerRejected = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.registerPending = false;
        state.registerRejected = false;
        state.registerFulfilled = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log(payload);
        state.registerPending = false;
        state.registerRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export default registerReducer.reducer;
