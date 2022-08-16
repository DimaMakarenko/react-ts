import axios, { AxiosRequestConfig } from 'axios';

const get = <T>(url: string, config?: AxiosRequestConfig<T> | undefined) => axios.get(url, config);

export const api = { get };
