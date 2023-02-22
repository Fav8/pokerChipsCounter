import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SocketService from '../services/socketService';
import { playersContext } from '../context/playersContext';
const socket = io('localhost:4000');
const socketService = new SocketService()

function Login() {
  const navigate = useNavigate();
  const { players, setPlayers } = useContext(playersContext);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [formField, setFormField] = React.useState({
    username:"", 
  })
  const formFieldHandler = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setFormField({...formField, [name]:value})
  }

  socket.on('newUsernameAdded', (users) => {
    console.log(users);
    setPlayers(users)
    navigate('/game')
  })

  function handleSubmit(){
    socket.emit('joinRoom', formField.username, 'poker')
  }

  return (
    <div>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
        }}
      style={{
        marginTop: 50, 
        display: "flex", 
        flexDirection: "column"
      }}
     
    >
      <input 
        type="text"
        name="username" 
        value={formField.username} 
        onChange={formFieldHandler} 
        placeholder="Username"
        style={{
          padding: "10px 10px", 
          width: "80%", 
          maxWidth: 540, 
          margin: "5px auto"
        }}
      />
      <button
        style={{width: 200, padding: 10, margin: "15px auto"}}
      >Submit</button>
    </form>
    </div>
  );
}

export default Login;