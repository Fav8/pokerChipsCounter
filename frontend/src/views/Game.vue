<template>
  <div class="container">
    <h1>GAME ROOM</h1>
  </div>
  <Player :player = "{activePlayer: true}"></Player>
  <Player></Player>
  <Player></Player>
</template>

<script>

import router from '@/router';
import Player from '@/components/Player.vue';
import { ref } from 'vue';
export default {
  name: 'game',
  components: {
    Player
  },
  setup () {
    const name = ref('');
    return {
      name,
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
