import React from 'react';
import "../../Stylesheets/Spirit/SpiritStats.css";
import {getSpiritStatsBySpiritId} from "../../redux/selectors/spiritStatsSelectors";
import {useSelector} from "react-redux";

const SpiritStats = ({spiritId}) => {
    const {health, armor, magicResistance} = useSelector(getSpiritStatsBySpiritId(spiritId));

    return (
        <div className="spiritStats">
            <span> Health: {health} </span>
            <span> Armor: {armor} | MR: {magicResistance} </span>
        </div>
    )
}

export default SpiritStats;
