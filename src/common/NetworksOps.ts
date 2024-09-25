// import StorageUtils from './StorageUtils';
import Config from '../app/Config';
// import AsyncKeys from './AsyncKeys';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { debugLog } from '../utils/Logger';
import { AppInstance, CommonHeaderProperties } from './AppInstance';

const TAG = 'NetworkOps: ';

interface CustomAxiosResponse extends AxiosResponse {
  data: {
    code: string;
    message: string;
  };
}
const unAuthRoutes = [Config.auth.verifyOTP];

const API_TIMEOUT = 10000;
const instance = axios.create({
  timeout: API_TIMEOUT,
});

instance.interceptors.request.use(
  config => {
    let newConfig = config;
    const url = config.url as string;
    try {
      const isTokenRequired = !unAuthRoutes.includes(url);
      const commonHeaders = AppInstance.getInstance().getCommonHeaders();

      if (isTokenRequired) {
        // const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN);
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            ...commonHeaders,
            Authorization: `Bearer ${'token'}`, // add token after getting some storage utils
          } as CommonHeaderProperties,
          timeout: API_TIMEOUT,
        };
      } else {
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            ...commonHeaders,
          } as CommonHeaderProperties,
          timeout: API_TIMEOUT,
        };
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        debugLog(TAG, `Error in interceptor request', ${e.message}`);
      }
    }
    return newConfig;
  },
  (error: AxiosError) => {
    debugLog(TAG, `Error in interceptor request', ${error.message}`);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res: CustomAxiosResponse) => {
    try {
      const { data } = res;
      const { code, message } = data;
      if (code !== '00000')
        debugLog(TAG, `${code} - ${message} - ${res.config.url || ''}`);
      return res as AxiosResponse<any, any>;
    } catch (e: unknown) {
      if (e instanceof Error) {
        debugLog(TAG, `Error in interceptor response ${e.message}`);
      }
    }
    return Promise.reject({
      success: false,
      message: 'NetworkOps: Something went wrong intercepting response',
    });
  },
  (error: AxiosError) => {
    debugLog(TAG, `${error.message}`);
    return Promise.reject(error?.response?.data);
  },
);

interface RequestFunctions {
  makeGetRequest: <T>(URL: string) => Promise<AxiosResponse<T, T>>;
  makePostRequest: <T>(
    URL: string,
    data?: object,
  ) => Promise<AxiosResponse<T, T>>;
  makePutRequest: <T>(
    URL: string,
    data?: object,
  ) => Promise<AxiosResponse<T, T>>;
  makePatchRequest: <T>(
    URL: string,
    data?: object,
  ) => Promise<AxiosResponse<T, T>>;
  makeDeleteRequest: <T>(URL: string) => Promise<AxiosResponse<T, T>>;
}

export const ApiRequest: RequestFunctions = {
  makeGetRequest: <T>(URL: string) => axios.get<T>(URL),
  makePostRequest: <T>(URL: string, data: object | undefined) =>
    axios.post<T>(URL, data),
  makePutRequest: <T>(URL: string, data: object | undefined) =>
    axios.put<T>(URL, data),
  makePatchRequest: <T>(URL: string, data: object | undefined) =>
    axios.patch<T>(URL, data),
  makeDeleteRequest: <T>(URL: string) => axios.delete<T>(URL),
};
