import axios, { AxiosRequestConfig } from 'axios';

export default axios.create({
  baseURL: `http://localhost:8080/`,
  responseType: 'json',
} as AxiosRequestConfig);