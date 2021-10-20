import React from 'react';
import SheriffGif from "../../Assets/sheriff.gif"
import "../../Stylesheets/Spirit/SpiritSlot.css"

import SpiritSprite from "./SpiritSprite";
import SpiritStats from "./SpiritStats";

const SpiritSlot = ({spiritId}) => {
    return (
        <div className="spiritSlot">
            <SpiritStats spiritId={spiritId}/>
            <SpiritSprite sprite={SheriffGif}/>
        </div>
    )
}

export default SpiritSlot
