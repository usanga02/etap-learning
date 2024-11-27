// services/axiosInstance.ts
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Replace with your API's base URL
  timeout: 5000, // Optional: Set a timeout for requests
});

const token = localStorage.getItem("site");
let user: any = null; // Default value

if (token) {
  try {
    user = JSON.parse(token);
  } catch (error) {
    console.error("Failed to parse token:", error);
  }
}

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // If the token exists, add it to the Authorization header
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.access_token}`;
    }

    return config; // Continue with the request
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Process response data if needed
    return response;
  },
  (error) => {
    // Handle response errors, such as unauthorized access (401)
    if (error.response && error.response.status === 401) {
      // Optionally, redirect to login or clear stored tokens
      console.error("Unauthorized access - redirecting to login...");
      // window.location.href = '/login'; // Example redirect
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
