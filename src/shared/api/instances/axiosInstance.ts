import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const axiosStrshipsConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_URL_API_STARSHIPS,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 3000,
};

const axiosAppConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_URL_API_APP,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        platform: "web",
    },
    timeout: 3000,
};

export const createInstanceStarship = (): AxiosInstance => axios.create(axiosStrshipsConfig);
export const createInstanceApp = (): AxiosInstance => axios.create(axiosAppConfig);
