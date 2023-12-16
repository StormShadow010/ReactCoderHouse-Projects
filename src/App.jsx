import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

// import { NavBarComponent } from "./components/NavBarComponent/NavBarComponent"
// import { ItemListContainerComponent } from './components/ItemListContainerComponent/ItemListContainerComponent';
import { useGetProducts } from './hooks/useProducts';
import { MainRouter } from './router/MainRouter';

export const App = () => {
  const { productsData } = useGetProducts(1, 40);
  console.log(productsData)
  return (
    <>
      <MainRouter />
      {/* <NavBarComponent /> */}
      {/* <ItemListContainerComponent greeting="Bienvenido a S&S Gaming Nexus" /> */}
    </>
  )
}
