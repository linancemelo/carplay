<template>
  <div class="sidebar h-100 d-flex flex-column justify-content-between align-items-center filter-blur {
  backdrop-filter: blur(100px);
}">
    <div class="top text-white text-center mt-1">
      <div class="time">
        {{time}}
      </div>
      <div class="signal">
        <span><i class="bi bi-reception-4"></i></span>
        <span> 5G</span>
      </div>
    </div>
    <div class="appliction d-flex flex-column fs-2">
      <router-link to="/map" class="bg-light text-primary px-2 rounded-app"><i class="bi bi-geo-alt-fill"></i></router-link>
      <router-link to="/music" class="music text-white px-2 my-2 rounded-app"><i class="bi bi-music-note-beamed"></i></router-link>
      <router-link to="/contact" class="phone text-white px-2 rounded-app"><i class="bi bi-telephone-fill"></i></router-link>
    </div>
    <div class="home py-2 fs-2">
      <router-link to="/" class="text-white"><i class="bi bi-house-fill"></i></router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const time = ref('')
    const getTime = () => {
      const m = ref(new Date().getMinutes())
      m.value = m.value < 10 ? `0+${m.value}` : m.value
      time.value = new Date().getHours() + ':' + m.value
    }
    getTime()

    return {
      time, getTime
    }
  }
}
</script>

<style scoped src="../assets/sidebar.css">

</style>
