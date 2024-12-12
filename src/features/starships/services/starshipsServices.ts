import { responseAdapter } from "../../../shared/api/adapters/responseAdapter";
import { axiosPublicStarship } from "../../../shared/api/axiosConfig";
import { ResposeApi } from "../../../shared/api/types/api.types";
import { starshipsEndpoints } from "../api/endpoints";
import { StarShips } from "../types/starship.types";

export const starshipsServices = {
    starshipsAll: async (): Promise<ResposeApi<StarShips>> => {
        try {
            const { data } = await axiosPublicStarship.get<StarShips>(starshipsEndpoints.starshipsAll());
            return responseAdapter(data);
        } catch (error) {
            return error as ResposeApi<StarShips>;
        }
    },
};
