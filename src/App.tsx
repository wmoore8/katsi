import React from 'react';
import './App.css';
import PlayerBoard from "./Components/PlayerBoard";
import {useSelector} from "react-redux";
import {getSpiritStatsForAllSpiritsSelector} from "./redux/selectors/spiritStatsSelectors";

function App() {
    const spirits = useSelector(getSpiritStatsForAllSpiritsSelector);
    const playerBoards = [];
    let currentSpiritId = 0;
    while(currentSpiritId < spirits.length){
        if(currentSpiritId + 1 === spirits.length) {
            playerBoards.push(<PlayerBoard key={currentSpiritId} spiritIds={[currentSpiritId]}/>)
        } else {
            playerBoards.push(<PlayerBoard key={currentSpiritId} spiritIds={[currentSpiritId, currentSpiritId + 1]}/>);
        }
        currentSpiritId+=2;
    }
    return (
        <div className="App">
            <div className="entireBoard">
                {playerBoards}
            </div>
        </div>
  );
}

export default App;
