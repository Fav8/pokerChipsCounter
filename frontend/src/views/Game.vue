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

export default {
  name: 'game',
  components: {
    Player
  },
  setup () {
    const socketService = new SocketService;
    function test() {
      socketService.test('testId', 'blue', [{chips:  { blue: {value: 25, qty: 64},
green: {value: 100, qty: 32},
purple: {value: 200, qty: 40},
red: {value: 50, qty: 64}},
id: "gGBwyycyLIUZxeyzAAAH",
username: "tom"}] )
    }
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
