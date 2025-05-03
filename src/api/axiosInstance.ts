import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NETLIFY_FUNCS,   timeout: 10000, 
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
        toast.error(`Request failed: ${error.message}`, {
            autoClose: 5000,
        });
        return Promise.reject(error);
    }
);

// Response Interceptor (for global error handling)
axiosInstance.interceptors.response.use(
(response) => {
    return response;
    },
    (error) => {

        console.error('API Error:', error.response || error.message);

        if (error.code === 'ECONNABORTED') {
          toast.error(`Request timeout. Server too slow.`, { autoClose: 5000 });
          console.error('Request timeout. Server too slow.');
        }
        else if (error.response) {
          // Normal error with status code
          if (error.response.status === 400) {
            toast.error(`Bad Request: ${error.message}`, { autoClose: 5000 });
          }
          else if (error.response.status === 401) {
            toast.error(`Unauthorized: ${error.message}`, { autoClose: 5000 });
            console.warn("Unauthorized, redirecting...");
            // window.location.href = '/login';
          }
          else if (error.response.status >= 500) {
            toast.error(`Server Error: ${error.message}`, { autoClose: 5000 });
            console.error(error.message);
          }
          else {
            toast.error(`Something went wrong: ${error.message}`, { autoClose: 5000 });
          }
        }
        else {
          // No error.response at all → Network error
          toast.error(`Network error: ${error.message}`, { autoClose: 5000 });
          console.error('Network error', error.message);
        }
    
        return Promise.reject(error);
    }
);

export default axiosInstance;