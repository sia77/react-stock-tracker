import axios from 'axios';
//import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NETLIFY_FUNCS, timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor 
axiosInstance.interceptors.request.use(
    (config) => {
        // You can attach tokens or log requests here
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        // toast.error(`Request failed: ${error.message}`, {
        //     autoClose: 5000,
        // });
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Full Error:", error);

    let customizedError = {
      message: "An unexpected error occurred.",
      status: error.response?.status || null,
    };

    if (error.code === "ECONNABORTED") {
      customizedError.message = "Request timeout. Server too slow.";
    } else if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          customizedError.message = "Bad request. Please check your input.";
          console.log(`**** ${error.response.data.message} ****`)
          break;
        case 401:
          customizedError.message = "Unauthorized. Please log in.";
          // window.location.href = '/login';
          break;
        case 403:
          customizedError.message = "Data unavailable due to subscription limits.";
          console.log(`**** ${error.response.data.message} ****`)
          break;
        case 500:
        default:
          customizedError.message = data?.message || `Server error (${status}). Please try again later.`;
          break;
      }
    } else {
      customizedError.message = "Network error. Please check your connection.";
    }

    return Promise.reject(customizedError);
  }
);

export default axiosInstance;