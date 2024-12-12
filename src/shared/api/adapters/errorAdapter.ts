import { AxiosError } from "axios";
import { ResposeApi } from "../types/api.types";

type ErrorStarship = {
    detail: string;
};

type ErrorServerApp = {
    success: boolean;
    message: string;
};

const isErrorStarship = (error: any): error is ErrorStarship => {
    return typeof error.detail === "string";
};

const isErrorServerApp = (error: any): error is ErrorServerApp => {
    return typeof error.success === "boolean" && typeof error.message === "string";
};

export const errorAdapter = (error: AxiosError): ResposeApi<never> => {
    //Errores del abckend App
    if (error.response && isErrorServerApp(error.response.data)) {
        return {
            success: false,
            message: error.response.data.message,
        };
    }

    //Errores del backend Starship
    if (error.response && isErrorStarship(error.response.data)) {
        return {
            success: false,
            message: error.response.data.detail,
        };
    }

    //Error de request
    if (error.request) {
        return {
            success: false,
            message: "Error de red",
        };
    }

    //Errores de configuración
    return {
        success: false,
        message: "Error desconocido",
    };
};
