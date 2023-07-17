import React, { useContext } from "react"
import { ThemeContext } from "./ThemeApp"

export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}