import React from "react";
import Menu from "./Menu/index";
import Star from "../HeadlessComponents/Star/Star";

function CompoundComponentsSection(){
    const sports = ["Tennis", "Pickleball", "Handball" ,"Racquetball", "Squash"]
    const dropdown = sports.map(sport => <Menu.Item key={sport}>{sport}</Menu.Item>)
    return (
        <div>
            <Star/>
            <Menu>  
                <Menu.Button>Sports</Menu.Button>
                <Menu.Dropdown>
                    {dropdown}
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default CompoundComponentsSection