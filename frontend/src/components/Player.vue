<template>
    <div class="playerContainer" :class="player.activePlayer ? 'activePlayer' : ''">
        <img src="../assets/chips.png" class="chips" alt="">
        <div class="playerInfo">
            <h2>PLAYER NAME</h2>
            <h3>Amount: 3000</h3>
            <div class="flex">
              <Chip :chip = "{chipValue: 25, chipAmount: 500}"></Chip>
              <Chip :chip = "{chipValue: 25, chipAmount: 500}"></Chip>
              <Chip :chip = "{chipValue: 25, chipAmount: 500}"></Chip>
              <Chip :chip = "{chipValue: 25, chipAmount: 500}"></Chip>
            </div>
        </div>
    </div>
</template>

<script>
import Chip from '@/components/Chip.vue';

import { ref } from 'vue';
export default {
  name: 'Player',
  props: {
    player: Object
  },
  components:{
    Chip
  },
  setup (props) {
    const player = props?.player ?? {};
    const name = ref('');
    return {
      name,
      player,
    }
  }
}
</script>

<style>
h2{
    margin: 0;
}
h3{
    margin: 0;
}
.activePlayer{
  background-color: greenyellow;
}
.playerContainer{
    display: flex;
    border: 2px solid black;
    border-radius: 10px;
    max-width: fit-content;
}
.playerInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
}
.chips{
    height: 75px;
}
</style>