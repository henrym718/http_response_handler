import { createInstanceStarship, createInstanceApp } from "./instances/axiosInstance";
import { applyRequestInterceptor } from "./interceptors/requestInterceptor";
import { applyResponseInterceptor } from "./interceptors/responseInterceptor";

export const axiosPublicApp = createInstanceApp();
applyRequestInterceptor(axiosPublicApp);
applyResponseInterceptor(axiosPublicApp);

export const axiosPublicStarship = createInstanceStarship();
applyRequestInterceptor(axiosPublicStarship);
applyResponseInterceptor(axiosPublicStarship);
