import React from "react";
import { IoPersonSharp } from "react-icons/io5"

function Avatar({children, src, alt}){
    //Arreglar en algun futuro ekisde
    const finalColor = ["navy", "pink", "red", "blue", "green"][Math.round(Math.random() * (["navy", "pink", "red", "blue", "green"].length - 1))]
    const content = children ? 
                        <div className={`${finalColor} avatar avatar-letters`}>{children}</div> : 
                        src ? 
                            <div className={`avatar`}><img src={src} alt={alt}/></div> : 
                            <div className={`${finalColor} avatar avatar-icon ${finalColor}`}>{<IoPersonSharp/>}</div>
    return (
        <div>
            {content}
        </div>
    )
}

export default Avatar