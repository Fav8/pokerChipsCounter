import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivePlayerStore = defineStore('activeplayer', () => {
    const activeplayer = ref({})

    function setActivePlayer(player) {
      activeplayer.value = player
    }
    return { activeplayer, setActivePlayer}
  })