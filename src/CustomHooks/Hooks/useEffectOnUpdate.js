import {useRef, useEffect} from "react"

function useEffectOnUpdate(effectFunction, deps){
    const firstRender = useRef(true)

    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false            
        }else{
            effectFunction() 
        }
        
    }, deps)
}

export default useEffectOnUpdate