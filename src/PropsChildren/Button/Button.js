import React from "react";

function Button({children,size,variant, className,  ...rest}){
    const tamano = size && `button-${size}`
    const variante = variant && `button-${variant}`
    
    return (
        <button className={`${tamano} ${variante} ${className}`} {...rest}>{children}</button>
    )
}

export default Button