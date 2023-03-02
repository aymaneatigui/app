import { useGetCat } from "./useGetCat";

export const Cat = () => {
    
    const {data, refetchData } = useGetCat();

    return (
        <div>
            <button onClick={refetchData}>Refetch</button>
            <h3>{data?.fact}</h3>
        </div>
    );

};