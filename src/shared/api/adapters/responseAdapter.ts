import { ResposeApi } from "../types/api.types";

export const responseAdapter = <T>(data: T): ResposeApi<T> => {
    return {
        success: true,
        data,
    };
};
