import io from 'socket.io-client'
import { useActivePlayerStore } from '@/store/pinia'

const room = 'poker'
const host = 'localhost:4000'


export default class SocketService {
    activePlayerStore = useActivePlayerStore()
    socket = io(host)
    joinRoom(userName) {
     this.socket.emit('joinRoom', userName, room)
     this.socket.on('newUsernameAdded', (users)=> {
         this.activePlayerStore.setActivePlayer(users[0])
        console.log(users);
     })
    }
    test(userId, chipColour, usersList) {
      this.socket.emit('addToUser', userId, chipColour, usersList, room)
      const result = this.socket.on('moneyAddedToUser', (users)=> {
         return users
      });
      return result
      }
     }
  
