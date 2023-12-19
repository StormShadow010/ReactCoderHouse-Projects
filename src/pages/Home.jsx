import { useGetProducts } from "../hooks/useProducts";
import { ItemListContainerComponent } from "../components/ItemListContainerComponent/ItemListContainerComponent"

export const Home = () => {
    const { productsData } = useGetProducts(1, 40);
    console.log(productsData)
    return (
        <>
            <ItemListContainerComponent productsData={productsData} />
        </>
    )
}
