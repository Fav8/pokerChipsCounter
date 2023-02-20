<template>
  <div class="container">
    <h1>GAME ROOM</h1>
  </div>
</template>

<script>

import router from '@/router';
import { ref } from 'vue';
export default {
  name: 'game',
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
