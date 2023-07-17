import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle({initialValue = false, onToggle = ()=>{}}){
    const [on, setOn] = useState(initialValue)

    useEffectOnUpdate(onToggle, [on])

    function toggle(){
        setOn(prev => !prev)
    }

    return [on, toggle]
}