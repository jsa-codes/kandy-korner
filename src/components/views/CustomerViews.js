import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
// import { ProductList } from '../Products/ProductList'

export const CustomerViews = () => {

    

	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner Shop</h1>
                    <div>Your one-stop-shop to get all your kandy</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                
            </Route>
        </Routes>
    )
}

