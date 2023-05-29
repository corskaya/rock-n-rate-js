import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/slice";
import registerReducer from "./pages/register/slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export default store;
