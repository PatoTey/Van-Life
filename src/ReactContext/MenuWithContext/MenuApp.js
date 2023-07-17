import React from "react";
import MenuWC from "./MenuWC";
import MenuButtonWC from "./MenuButtonWC"
import MenuDropdownWC from "./MenuDropdownWC"
import MenuItemWC from "./MenuItemWC"


function MenuApp(){
    const sports = ["Tennis", "Pickleball", "Handball" ,"Racquetball", "Squash"]
    const dropdown = sports.map(sport => <MenuItemWC key={sport}>{sport}</MenuItemWC>)
    
    return (
            <MenuWC>  
                <MenuButtonWC>Sports</MenuButtonWC>
                <MenuDropdownWC>
                    {dropdown}
                </MenuDropdownWC>
            </MenuWC>
    )
}

export default MenuApp
