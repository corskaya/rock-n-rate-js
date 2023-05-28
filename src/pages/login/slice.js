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
  "loginReducer/login",
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await post("/user/login", formData);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }
      return status;
    } catch (e) {
      console.log("loginReducer/login err:", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    // setLoginStatus: (state, action) => {
    //   state.loginStatus = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginPending = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loginPending = false;
        state.loginFulfilled = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loginPending = false;
        state.loginRejected = true;
        state.errorMessage = payload.error;
      });
  },
});

// export const {
//   setLoginStatus,
// } = loginReducer.actions;

export default loginReducer.reducer;
