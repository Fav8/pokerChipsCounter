import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { playersContext } from '../context/playersContext';
import SocketService from '../services/socketService';


function Game() {
  const { players, setPlayers } = useContext(playersContext);
  const socket = io('localhost:4000');
  const socketService = new SocketService();
 const usersList = players.map((person => <li key={person.id}>{person.username}</li>))
  function test() {
      socketService.test('gGBwyycyLIUZxeyzAAAH', 'blue', players)
    }
  socket.on('moneyAddedToUser', (users) => {
        console.log(users);
    })

  return (
    <div>
      <div className='container'>
        <h1>GAME ROOM</h1>
      </div>
      <div>
        {usersList}
      </div>
      <button onClick={test}>TEST</button>
    </div>
  );
}

export default Game;