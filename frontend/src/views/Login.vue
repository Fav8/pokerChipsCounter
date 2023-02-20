<template>
  <div class="login">
    <img src="../assets/logo.png" style="height: 100px; width: auto;" alt="Vue.js PWA">
    <h1>Enter your name</h1>
    <input type="text" v-model="name" placeholder="your name"/>
    <button @click="joinRoom">JOIN</button>
  </div>
</template>

<script>
/* import router from '../router'; */

import router from '@/router';
import { ref } from 'vue';
import SocketService from '@/services/socketService';
export default {
  name: 'login',
  setup () {
    const socketService = new SocketService
    const name = ref('');
    function joinRoom() {
      socketService.joinRoom(name.value)
      router.push('/game')
    }
    return {
      name,
      joinRoom
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
