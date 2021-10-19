import React from 'react';
import "../../Stylesheets/Spirit/SpiritStats.css";

const SpiritStats = ({health, armor, mr}) => {
    return (
        <div className="spiritStats">
            <span> Health: {health} </span>
            <span> Armor: {armor} | MR: {mr} </span>
        </div>
    )
}

export default SpiritStats;
