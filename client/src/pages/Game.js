import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { playersContext } from '../context/playersContext';
import SocketService from '../services/socketService';


function Game() {
  const { players, setPlayers } = useContext(playersContext);
  const socket = io('localhost:4000');
  const socketService = new SocketService();
    function test() {
        socketService.test('gGBwyycyLIUZxeyzAAAH', 'blue', [{chips:  { blue: {value: 25, qty: 64},
        green: {value: 100, qty: 32},
        purple: {value: 200, qty: 40},
        red: {value: 50, qty: 64}},
        id: "gGBwyycyLIUZxeyzAAAH",
        username: "tom"}] )
      }
      //The below needs to be in an event lisener
    socket.on('moneyAddedToUser', (users) => {
         console.log(users);
      })

  return (
    <div>
      <div className='container'>
        <h1>GAME ROOM</h1>
      </div>
      <div>
        {/* <Player :player = "{activePlayer: true}"></Player>
        <Player></Player>
        <Player></Player> */}
        {players[0].username}
      </div>
      <button>TEST</button>
    </div>
  );
}

export default Game;