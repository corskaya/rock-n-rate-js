import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/network";

const initialState = {
  loginPending: false,
  loginFulfilled: false,
  loginRejected: false,
  user: null,
  token: null,
  errorMessage: null,
};

export const login = createAsyncThunk(
  "home/login",
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await post("/user/login", formData);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }
      return status;
    } catch (e) {
      console.log("home/login err:", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    // setLoginStatus: (state, action) => {
    //   state.loginStatus = action.payload;
    // },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loginPending = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loginPending = false;
      state.loginFulfilled = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [login.rejected]: (state, { payload }) => {
      state.loginPending = false;
      state.loginRejected = true;
      state.errorMessage = payload.error;
    },
  },
});

// export const {
//   setLoginStatus,
// } = home.actions;

export default home.reducer;
