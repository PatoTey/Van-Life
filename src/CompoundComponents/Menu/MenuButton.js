import React from "react"
import Button from "../../PropsChildren/Button/Button"

export default function MenuButton({ children, toggle }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}