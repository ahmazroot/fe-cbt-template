import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { env } from '@/env';

/**
 * Create axios instance with default configuration
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 * - Add authorization token
 * - Add custom headers
 * - Log requests in development
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Log request in development
    if (env.NODE_ENV === 'development') {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * - Handle success responses
 * - Handle errors globally
 * - Log responses in development
 */
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (env.NODE_ENV === 'development') {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle different error cases
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
            window.location.href = '/login';
          }
          break;

        case 403:
          console.error('❌ Forbidden:', data);
          break;

        case 404:
          console.error('❌ Not Found:', data);
          break;

        case 500:
          console.error('❌ Server Error:', data);
          break;

        default:
          console.error('❌ API Error:', data);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('❌ Network Error:', error.message);
    } else {
      // Error in request configuration
      console.error('❌ Request Configuration Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
