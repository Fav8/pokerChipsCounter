import io from 'socket.io-client'
const room = 'poker'
const host = 'localhost:4000'
export default class SocketService {
    socket = io(host)
    joinRoom(userName) {
     this.socket.emit('joinRoom', userName, room)
     this.socket.on('newUsernameAdded', (users)=> {
        console.log(users);
     })
    }
  
  }