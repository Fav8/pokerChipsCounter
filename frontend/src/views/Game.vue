<template>
  <div class="container">
    <h1>GAME ROOM</h1>
  </div>
  <div>
    <Player :player = "{activePlayer: true}"></Player>
    <Player></Player>
    <Player></Player>
  </div>

  <button @click="test">TEST</button>
</template>

<script>

import router from '@/router';
import Player from '@/components/Player.vue';
import { ref } from 'vue';
import SocketService from '@/services/socketService';
import io from "socket.io-client";


export default {
  name: 'game',
  components: {
    Player
  },
  setup () {
    const socket = io('localhost:4000');

    const socketService = new SocketService;
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
    const name = ref('');
    return {
      name,
      test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
