import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
//import Toggle from "../ToggleComponent/index"
import useToggle from "../../CustomHooks/Hooks/useToggle"

export default function Star({onChange}) {
    const [on, toggle] = useToggle()
    return (
            <div onClick={toggle}>
                {on ? <BsStarFill className="star filled"/> : <BsStar  className="star" />}
            </div>           
    )
}