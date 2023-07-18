import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import imgUrl from "../assets/images/about-hero.png"

export default function Header(){
    const navigate = useNavigate()
    const styles= {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        navigate("/")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink style={({isActive}) => isActive ? styles : null } to="/host">Host</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null } to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null } to="/vans">Vans</NavLink>
                <Link to="login" className="login-link"> <img src={imgUrl} className="login-icon" alt="avcon"/></Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}