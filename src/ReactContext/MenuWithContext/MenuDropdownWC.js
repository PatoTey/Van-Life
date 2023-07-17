import React, { useContext } from "react"
import { MenuContext } from "./MenuWC"

export default function MenuDropdownWC({ children }) {
    const {open} = useContext(MenuContext)
    return open ? (
            <div className="menu-dropdown">
                {children}
            </div>
    ) : null
}