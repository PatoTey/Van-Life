import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function List(){
    const [vans, setVans] = useState([])
    const [loading, setLoading] =useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("typeFilter")

    useEffect(()=> {
        async function loadVans(){
            
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            } 
        }
        loadVans()
        
    }, [])

    const vanfiltradas = typeFilter 
        ? vans.filter(van => van.type === typeFilter) 
        : vans

    const listavans =  vanfiltradas.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                <img src={van.imageUrl} alt=""/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    /*function genNewSearchParam(key, value){
        const sp = new URLSearchParams(searchParams)
        if(value === null){
            sp.delete(key)
        }else{
            sp.set(key, value)
        }
        console.log(sp.toString())
        return `?${sp.toString()}`
    }*/

    function handleFilterChange(key, value){
        setSearchParams(prev => {
            if(value === null){
                prev.delete(key)
            }else{
                prev.set(key, value)
            }
            return prev
        })
    }

    if(loading){
        return <h1>We are loading...!!!!</h1>
    }

    if(error){
        return <h1>There was an error: {error.message} </h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                {/*
                <Link className="van-type simple" to={genNewSearchParam("typeFilter","simple")}>Simple</Link>
                <Link className="van-type rugged" to={genNewSearchParam("typeFilter","rugged")}>Rugged</Link>
                <Link className="van-type luxury" to={genNewSearchParam("typeFilter","luxury")}>Luxury</Link>
                {searchParams.has("typeFilter") ? <Link className="van-type clear-filters" to={genNewSearchParam("typeFilter",null)}>Clear Filter</Link> : null}
                */}

                <button onClick={()=> handleFilterChange("typeFilter","simple")} 
                        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button onClick={()=> handleFilterChange("typeFilter","rugged")} 
                        className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>
                <button onClick={()=> handleFilterChange("typeFilter","luxury")} 
                        className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                {typeFilter ? <button onClick={()=> handleFilterChange("typeFilter",null)} 
                    className="van-type clear-filters"
                >Clear Filter</button> : null}
            
            </div>
            <div className="van-list">
                {listavans}
            </div>
        </div>
    )
}