import { useEffect, useState } from "react";
import { Result } from "../types/starship.types";
import { starshipsServices } from "../services/starshipsServices";

interface State {
    error: string;
    data: Result[];
}

export function useStarShips() {
    const [error, setError] = useState<State["error"]>("");
    const [data, setData] = useState<State["data"]>([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await starshipsServices.starshipsAll();
            if (response.success) {
                setData(response.data.results);
            } else {
                setError(response.message);
            }
        };
        fetch();
    }, []);

    return { error, data };
}
