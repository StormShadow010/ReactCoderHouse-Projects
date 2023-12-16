import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent"
import { News } from '../pages/News'

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/news' element={<News />} />
                {/* <Route path='/item/:productId' element={<ItemDetailContainer />}/> */}
                {/* <Route path='/category/:id' element={<Category />}/> */}
            </Routes>
        </BrowserRouter>
    )
}
