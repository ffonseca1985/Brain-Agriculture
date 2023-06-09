
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Dashboards from "../pages/dashboards";
import Producer from "../pages/producer";
import Home from "../pages";

const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />   
                <Route path="/producer" element={<Producer />} />
                <Route path="/dashboards" element={<Dashboards />} />
            </Route>
        </Routes>
    )
};

export default AppRoutes
