import io from 'socket.io-client'

const room = 'poker'
const host = 'localhost:4000'


export default class SocketService {
    socket = io(host)
    joinRoom(userName) {
     return this.socket.emit('joinRoom', userName, room)
    }
    test(userId, chipColour, usersList) {
      this.socket.emit('addToUser', userId, chipColour, usersList, room)
      const result = this.socket.on('moneyAddedToUser', (users)=> {
         return users
      });
      return result
      }
     }
  
