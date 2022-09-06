import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner Kush Shop</h1>
                    <div>Your one-stop-shop to get all your kush kandy</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                <Route path="kandies" element={ <LocationList /> } />
            </Route>
        </Routes>
    )
}

