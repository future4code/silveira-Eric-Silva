import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage";
import AdminHomePage from "../Pages/AdminHomePage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import CreateTripPage from "../Pages/TripDetailsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/trips/list" element={<ListTripsPage/>}/>
        <Route path="/trips/application" element={<ApplicationFormPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
        <Route path="/admin/trips/create" element={<TripDetailsPage/>}/>
        <Route path="/admin/trips/:id" element={<CreateTripPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}