import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Game from './pages/Game';
import { playersContext } from './context/playersContext';

export default function App() {
  const [players, setPlayers] = useState([])
  return (
    <playersContext.Provider value={{players, setPlayers}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </playersContext.Provider>
  );
}
