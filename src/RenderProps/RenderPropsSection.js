import React from "react";

/*
    import Decision from "./Desicion/Decision";
*/
import Toggle from "../HeadlessComponents/ToggleComponent/index"

export default function RenderPropsSection(){
    return (
        <>
            <div>
            {/*
                <Decision>
                    {(goingOut)=> {
                        return (
                            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
                            )
                    }}
                </Decision>
                */}
            </div>
            <Toggle>
                <Toggle.Button>
                    <Toggle.Display>
                        {(bool) => {
                            return <div className={`box ${ bool ? "filled" : ""}`}></div>         
                        }}     
                    </Toggle.Display>

                        
                </Toggle.Button>
            </Toggle>
        </>
    )
}