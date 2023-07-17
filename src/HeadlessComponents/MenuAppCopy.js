import React from "react";
import MenuWH from "./MenuWithHeadless/indexWH";
import Star from "./Star/Star";

function CompoundComponentsSection(){
    const sports = ["Tennis", "Pickleball", "Handball" ,"Racquetball", "Squash"]
    const dropdown = sports.map(sport => <MenuWH.Item key={sport}>{sport}</MenuWH.Item>)
    return (
        <div>
            <Star/>
            <MenuWH>  
                <MenuWH.Button>Sports</MenuWH.Button>
                <MenuWH.Dropdown>
                    {dropdown}
                </MenuWH.Dropdown>
            </MenuWH>
        </div>
    )
}

export default CompoundComponentsSection