import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { setLoginStatus } from "./pages/login/slice";
import registerReducer from "./pages/register/slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (token && user) {
  store.dispatch(setLoginStatus({ user, token }));
}

export default store;
