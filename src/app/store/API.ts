import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';

const notify = (text: string) => toast.error(text);

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string | undefined } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      axios.interceptors.response.use(
        (res) => {
          if (res?.data?.error) {
            toast.error(res?.data?.error.message, {
              //@ts-ignore
              position: toast.POSITION.TOP_RIGHT,
            });
            return Promise.reject(res?.data?.error);
          }
          return res;
        },
        async (err) => {
          if (err.response.status === 403) {
            localStorage.removeItem('synexis-access-token');
          }
          return Promise.reject(err);
        }
      );
      axios.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('synexis-access-token');
          if (config.url !== 'auth/login/role' && !!config?.headers && token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      notify(err.message);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export default axiosBaseQuery;
