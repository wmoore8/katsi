import React from 'react';
import '../Stylesheets/PlayerBoard.css'
import SpiritSlot from "./Spirit/SpiritSlot";
import SetBonusesInfo from "./SetBonusesInfo";
import SpiritParty from "./Spirit/SpiritParty";

const PlayerBoard = ({spiritIds}) => {
    console.error(spiritIds);
    return (
        <div className="playerBoard">
            <SpiritParty/>
            <SetBonusesInfo/>
            {spiritIds.map(spiritId => (<SpiritSlot spiritId={spiritId}/>))}
        </div>
    )
}

export default PlayerBoard;
