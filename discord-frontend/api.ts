import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000,
});

export const login = async (data: any) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (err: any ) {
    return {
      error: true,
      message: err.message,
    };
  }
};

export const register = async (data: any) => {
    try {
      return await apiClient.post("/auth/register", data);
    } catch (err :any ) {
      return {
        error: true,
        message: err.message,
      };
    }
  };
  
