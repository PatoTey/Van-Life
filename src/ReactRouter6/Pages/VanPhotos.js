import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPhotos(){
    const [van] = useOutletContext()
    return (
            <img src={van.imageUrl} className="host-van-detail-image" alt="" />
    )
}