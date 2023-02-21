import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


const socket = io('localhost:4000');

function Game() {

  return (
    <div>
      GAME ROMM
    </div>
  );
}

export default Game;