import { useState } from 'react';

import './App.css';
import PlayerBoard from "./Components/PlayerBoard";

function App() {
  return (
    <div className="App">
      <div className="entireBoard">

        <PlayerBoard />

        <PlayerBoard />

      </div>

      <div className="devTools">

      </div>
    </div>
  );
}

export default App;
