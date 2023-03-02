import { useQuery } from "@tanstack/react-query";
import  Axios from "axios";

export const useGetCat = () => {

    const {data, refetch, error} = useQuery(["Cat"], async () =>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    });

    const refetchData = ()=>{
        alert("Data Refetch");
        refetch();
    }
    if(error){
        alert("Eroor");
    }

    return {data, refetchData};
};