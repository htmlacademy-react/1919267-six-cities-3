import axios, { AxiosInstance } from 'axios';

const BACKEND_API = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_API,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
