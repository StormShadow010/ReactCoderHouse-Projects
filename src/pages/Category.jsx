import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/useProducts";
import { ItemListContainerComponent } from "../components/ItemListContainerComponent/ItemListContainerComponent";

export const Category = () => {
    const { id } = useParams();
    console.log(`Category: ${id}`);

    const { productsData } = useGetProductsByCategory(id);

    console.log("Games:", productsData)
    return (
        <ItemListContainerComponent productsData={productsData} />
    )
}
