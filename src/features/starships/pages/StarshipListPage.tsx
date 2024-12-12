import { useStarShips } from "../hooks/useStarShips";

export function StarshipListPage() {
    const { data, error } = useStarShips();

    if (error) {
        return <div>{error}</div>;
    }

    return <div className=" text-sm">{JSON.stringify(data)}</div>;
}
