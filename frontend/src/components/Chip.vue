<template>
  <div class="chipContainer">
    <div class="chipButtons">
      <button>-</button>
      <h2>{{ chipValue }}</h2>
      <button>+</button>
    </div>
    <div>
      {{ chipAmount }}
    </div>
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
.chipButtons{
  display: flex;
  margin: 5px;
}
.chipContainer{
  display: flex;
  flex-direction: column;
}
</style>