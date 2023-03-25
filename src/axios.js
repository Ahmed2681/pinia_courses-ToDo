// axios
import axios from "axios";

const baseURL = "http://localhost:4101/m1";
// const baseURL = "https://api.beezasisstant.com/m1";

const getAxiosInstance = () => {
  const instance = axios.create({ baseURL });

  // Add token to the headers
  instance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  });

  // Redirect to login page on token errors
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default getAxiosInstance();
