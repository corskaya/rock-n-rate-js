import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/network";

const initialState = {
  registerPending: false,
  registerFulfilled: false,
  registerRejected: false,
  errorMessage: null,
  toastStatus: {
    show: false,
    title: null,
    message: null,
    type: "info",
  },
};

export const register = createAsyncThunk(
  "registerReducer/register",
  async ({ formData, navigate }, thunkAPI) => {
    try {
      const { data, status } = await post("/user/register", formData);

      if (status !== 201) {
        return thunkAPI.rejectWithValue(data);
      }

      navigate("/login");
      return data;
    } catch (e) {
      return e.response
        ? thunkAPI.rejectWithValue(e.response.data)
        : thunkAPI.rejectWithValue(e);
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
        state.toastStatus = {
          show: true,
          title: "Successful",
          message: "Account registered. Please login.",
          type: "success",
        };
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.registerPending = false;
        state.registerRejected = true;
        state.errorMessage = payload.message;
      });
  },
});

export default registerReducer.reducer;
