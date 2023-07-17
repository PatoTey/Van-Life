import React, { useContext } from "react"
//import Toggle from "../ToggleComponent/index"
import { MenuContext } from "./MenuWH"

export default function MenuDropdown({ children }) {
    const {open} = useContext(MenuContext)
    return open ? (
            <div className="menu-dropdown">
                {children}
            </div>
    ) : null
}