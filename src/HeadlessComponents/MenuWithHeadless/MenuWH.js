import React, { createContext } from "react"
//import Toggle from "../ToggleComponent/index"
import useToggle from "../../CustomHooks/Hooks/useToggle"

const MenuContext = createContext()

export default function Menu({children, onOpen}) {
    const [open, toggleOpen] = useToggle({onToggle: onOpen})

    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export {MenuContext}