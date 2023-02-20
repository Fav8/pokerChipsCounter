import io from 'socket.io-client'

const host = 'localhost:4000'
export default class SocketService {
    socket = io(host)
    joinRoom(userName) {
     this.socket.emit('joinRoom', userName)
     this.socket.on('newUsernameAdded', (users)=> {
        console.log(users);
     })
    }
  
  }