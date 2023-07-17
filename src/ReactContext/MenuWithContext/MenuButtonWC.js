import React, { useContext } from "react"
import Button from "../../PropsChildren/Button/Button"
import { MenuContext } from "./MenuWC"

export default function MenuButtonWC({ children }) {
    const {toggle} = useContext(MenuContext)
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}