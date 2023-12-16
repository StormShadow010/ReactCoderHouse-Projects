import { useEffect, useState } from "react";
import { getProducts } from "../services";

export const useGetProducts = (pageGames, pageSize) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(pageGames, pageSize)
            .then((response) => {
                setProductsData(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return { productsData }
}
