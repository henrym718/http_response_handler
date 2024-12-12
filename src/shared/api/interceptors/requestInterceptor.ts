import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { errorAdapter } from "../adapters/errorAdapter";

export const applyRequestInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            return config;
        },
        (error: AxiosError): Promise<never> => {
            return Promise.reject(errorAdapter(error));
        }
    );
};
