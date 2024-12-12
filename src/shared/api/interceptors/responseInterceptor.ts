import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { errorAdapter } from "../adapters/errorAdapter";

export const applyResponseInterceptor = (axiosIntance: AxiosInstance) => {
    axiosIntance.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse => {
            return response;
        },
        (error: AxiosError): Promise<never> => {
            return Promise.reject(errorAdapter(error));
        }
    );
};
