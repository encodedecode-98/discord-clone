import axios from "axios";
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { logout } from "./src/shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000,
});

// runs before every request that is executed
// @ts-ignore
apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = "Bearer " + token;
    }
    return config; // necessary step
  },
  (err) => {
    return Promise.reject(err);
  }
);

// use of interceptors

// https://stackoverflow.com/questions/52737078/how-can-you-use-axios-interceptors

export const login = async (data: any) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (err: any) {
    return {
      error: true,
      message: err.message,
    };
  }
};

export const register = async (data: any) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (err: any) {
    return {
      error: true,
      message: err.message,
    };
  }
};

//secure routes

const checkResponseCode = (exception: any) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    responseCode === 401 || (responseCode === 403 && logout());
  }
};
