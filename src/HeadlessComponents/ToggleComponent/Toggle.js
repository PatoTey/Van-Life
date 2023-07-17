import React, {createContext} from "react";
import useEffectOnUpdate from "../../CustomHooks/Hooks/useEffectOnUpdate";
import useToggle from "../../CustomHooks/Hooks/useToggle";

const ToggleContext = createContext()

function Toggle({children, onToggle = ()=>{}}){
    const [on, toggle] = useToggle()

    useEffectOnUpdate(onToggle , [on])

    return (
        <>
            <ToggleContext.Provider value={{on, toggle}}>
                {children}
            </ToggleContext.Provider>
        </>
    )
}

export default Toggle
export {ToggleContext}