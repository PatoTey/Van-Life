import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import List from "./Pages/List";
import Van from "./Pages/Van";
import Layout from "./Components/Layout"
import Dashboard from "./Pages/Host/Dashboard";
import Reviews from "./Pages/Host/Reviews";
import Income from "./Pages/Host/Income";
import HostLayout from "./Components/HostLayout"
import HostVans from "./Pages/HostVans";
import HostVan from "./Pages/HostVan";
import "../server"
import VanPricing from "./Pages/VanPricing";
import VanPhotos from "./Pages/VanPhotos";
import VanDetails from "./Pages/VanDetails";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import AuthRequired from "./AuthRequired";

export default function ReactRouterSection(){
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Layout/>}>
                    
                    <Route index element={<Home/>}/> 
                    <Route path="about" element={<About/>}/>
                    <Route path="vans" element={<List/>}/>
                    <Route path="vans/:id" element={<Van/>}/>
                    <Route path="login" element={<Login />}/>

                    <Route element={<AuthRequired/>}>
                        <Route path="host" element={<HostLayout/>}>
                            <Route index element={<Dashboard/>}/>
                            <Route path="income" element={<Income/>}/>
                            <Route path="vans" element={<HostVans/>}/>
                            <Route path="reviews" element={<Reviews/>}/>

                            <Route path="vans/:id" element={<HostVan/>}>
                                <Route index element={<VanDetails/>}/>
                                <Route path="pricing" element={<VanPricing/>}/>
                                <Route path="photos" element={<VanPhotos/>}/>
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}