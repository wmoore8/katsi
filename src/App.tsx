import React from 'react';
import './App.css';
import PlayerBoard from "./Components/PlayerBoard";

function App() {
  return (
    <div className="App">
      <div className="entireBoard">
        <PlayerBoard spiritIds={[0,1]}/>
        <PlayerBoard spiritIds={[2,3]}/>
      </div>
    </div>
  );
}

export default App;
