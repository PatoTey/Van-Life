import React from "react";
/*
import Toggle from "../HeadlessComponents/ToggleComponent/index";
import Star from "../HeadlessComponents/Star/Star"
*/
import Menu from "../HeadlessComponents/MenuWithHeadless/indexWH";

export default function CustomHookSection(){
    return (
        <>
            <div>
            {/*
                 <Star/>
            <Toggle onToggle={()=>{console.log("Toggled")}}>
                <Toggle.Button>
                    <Toggle.Display>
                        {(bool) => {
                            return <div className={`box ${ bool ? "filled" : ""}`}></div>         
                        }}     
                    </Toggle.Display>      
                </Toggle.Button>
            </Toggle>
            */}
            </div>
           

            <Menu onOpen={()=> {console.log("Opened or closed")}}>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Dropdown>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>About</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
                <Menu.Item>Blog</Menu.Item>
                </Menu.Dropdown>
            </Menu>

        </>
    )
}