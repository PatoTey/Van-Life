import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List(){
    const [vans, setVans] = useState([])
    useEffect(()=> {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const listavans = vans.map(van => (
        <Link key={van.id} to={`/vans/${van.id}`}>
            <div className="van-tile">
                <img src={van.imageUrl} alt=""/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {listavans}
            </div>
        </div>
    )
}