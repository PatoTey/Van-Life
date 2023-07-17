import React,{useContext} from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleDisplay({children}){
    const {on} = useContext(ToggleContext)

    return (
        <>
            {children(on)}
        </>
    )
}