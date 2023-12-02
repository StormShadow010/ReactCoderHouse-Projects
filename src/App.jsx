import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import { NavBarComponent } from "./components/NavBarComponent/NavBarComponent"
import { ItemListContainerComponent } from './components/ItemListContainerComponent/ItemListContainerComponent';

export const App = () => {
  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenido a S&S Gaming Nexus

" />
    </>
  )
}
