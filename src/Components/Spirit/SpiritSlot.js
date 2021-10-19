import React, {useState} from 'react';
import SheriffGif from "../../Assets/sheriff.gif"
import "../../Stylesheets/Spirit/SpiritSlot.css"

import SpiritSprite from "./SpiritSprite";
import SpiritStats from "./SpiritStats";

const SpiritSlot = () => {

    const [health, setHealth] = useState(100);
    const [armor, setArmor] = useState(50);
    const [mr, setMr] = useState(50);



    return (
        <div className="spiritSlot">

            <SpiritStats health={health} armor={armor} mr={mr} />
            <SpiritSprite sprite={SheriffGif}/>

        </div>
    )
}

export default SpiritSlot
