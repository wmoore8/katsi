import React from 'react';
import '../Stylesheets/PlayerBoard.css'
import SpiritSlot from "./Spirit/SpiritSlot";
import SetBonusesInfo from "./SetBonusesInfo";
import SpiritParty from "./Spirit/SpiritParty";

const PlayerBoard = () => {

    return (
        <div className="playerBoard">
            <SpiritParty/>
            <SetBonusesInfo/>
            <SpiritSlot/>
            <SpiritSlot/>
        </div>
    )
}

export default PlayerBoard;
