import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { getVan } from "../api";

export default function HostVan(){
    const [van, setVan] = useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const {id} = useParams()

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(()=>{
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    },[id])


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            {van && <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt=""/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink style={({isActive})=>isActive ? styles : null} end to={`.`}>Details</NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} to={`pricing`}>Pricing</NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} to={`photos`}>Photos</NavLink>
                </nav>
                <Outlet context={[van]}/>
            </div>}
        </section>
    )
}