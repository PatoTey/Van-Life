import React from "react"

const MenuContext = React.createContext()

export default function MenuWC({children}) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        console.log("Toggled---")
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export {MenuContext}