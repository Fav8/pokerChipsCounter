<template>
    <div class="chipContainer">
      <button>-</button>
      <h2>{{ chipValue }}</h2>
      <button>+</button>
    </div>
    <div>
      {{ chipAmount }}
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Player',
  props: {
    chip: Object
  },
  setup (props) {
    const {chipValue, chipAmount} = props?.chip
    return {
      chipValue,
      chipAmount
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
.chipContainer{
  display: flex;
  margin: 5px;
}
</style>