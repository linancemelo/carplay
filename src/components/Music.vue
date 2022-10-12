<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="navbar-nav" @click.prevent="changePlaylist">
        <a class="nav-link active" aria-current="page" href="#">我的歌單</a>
        <a class="nav-link" href="#">熱門排行</a>
        <a class="nav-link" href="#">新歌排行</a>
        <!-- <a class="nav-link disabled">Disabled</a> -->
      </div>
    </div>
  </nav>
  <div class="frame">
    <iframe
      :src="`https://widget.kkbox.com/v1/?id=${currentId}&type=playlist&terr=TW&lang=TC`"
      allow="autoplay"
      height="599"
    />
  </div>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  setup () {
    const currentId = ref('4nKGgtS42aVxYGLbF-')
    const id = inject('id')
    id.value.mineId = '4nKGgtS42aVxYGLbF-'

    const changePlaylist = function (e) {
      document.querySelectorAll('.nav-link').forEach((i) => {
        i.classList.remove('active')
      })
      e.target.classList.add('active')
      if (e.target.textContent === '熱門排行') {
        currentId.value = id.value.dailyId
      } else if (e.target.textContent === '新歌排行') {
        currentId.value = id.value.newId
      } else {
        currentId.value = id.value.mineId
      }
    }

    return {
      currentId,
      id,
      changePlaylist
    }
  }
}
</script>

<style scoped lang="css" src="@/assets/music.css"></style>
