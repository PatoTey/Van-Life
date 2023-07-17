import React, { useContext } from "react"
import Button from "../../PropsChildren/Button/Button"
//import Toggle from "../ToggleComponent/index"
import { MenuContext } from "./MenuWH"

export default function MenuButton({ children}) {
    const {toggleOpen} = useContext(MenuContext)

    return (
        <Button onClick={toggleOpen}>{children}</Button>
    )
}