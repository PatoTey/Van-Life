import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout(){
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
            <nav className="host-nav">
                <NavLink style={({isActive}) => isActive ? styles : null} end to=".">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}