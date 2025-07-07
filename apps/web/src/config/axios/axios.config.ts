import axios from 'axios';
import {
  requestErrorHandler,
  requestHandler,
  responseErrorHandler,
  responseHandler,
} from './interceptors';

export const BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
export const WS_URL =
  import.meta.env.VITE_APP_WEB_SOCKET_ENDPOINT || 'http://localhost:3003';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/x-www-form-urlencoded',
};

// x-www-form-urlencoded

const baseInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

baseInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

apiInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

apiInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

export { baseInstance, apiInstance };
