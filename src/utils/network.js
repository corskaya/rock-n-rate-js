import axios from "axios";
import store from "../store";

const _getToken = () => store.getState().login.token;

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// response middleware
instance.interceptors.response.use(
  (response) => {
    console.log("--response", response);
    return response;
  },
  (error) => {
    console.log("--error.response", error);
    if (error.message === "Network Error") {
      throw new Error("Server Not Reachable");
    }

    return error.response;
  }
);

// request middleware
instance.interceptors.request.use(
  (request) => {
    console.log("--request", request);
    return request;
  },
  (error) => {
    console.log("--error.request", error);
  }
);

export const get = (url, params = null) => {
  return instance.get(url, {
    headers: {
      Authorization: `Bearer ${_getToken()}`,
    },
    params,
  });
};

export const post = (url, params = null) => {
  return instance.post(url, params, {
    headers: {
      Authorization: `Bearer ${_getToken()}`,
    },
  });
};

export const put = (url, params = null) => {
  return instance.put(url, params, {
    headers: {
      Authorization: `Bearer ${_getToken()}`,
    },
  });
};

export const patch = (url, params = null) => {
  return instance.patch(url, params, {
    headers: {
      Authorization: `Bearer ${_getToken()}`,
    },
  });
};

export const del = (url) => {
  return instance.delete(url, {
    headers: {
      Authorization: `Bearer ${_getToken()}`,
    },
  });
};
