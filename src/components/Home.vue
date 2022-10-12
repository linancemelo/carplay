<template>
  <div class="container-fluid">
    <div class="row px-3">
      <div class="col-6 py-3" @click.prevent="toMap">
        <iframe
          width="620"
          height="620"
          :src="`https://maps.google.com/maps?q=${now.lati},%20${now.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div class="col-6">
        <div
          class="top d-flex justify-content-center my-3 pt-5 rounded text-white filter-blur"
          @click.prevent="toMusic"
        >
          <div>
            <button class="btn rounded-pill bg-primary">
              <i class="bi bi-sign-turn-right-fill text-white"></i></button
            ><span>出發</span>
          </div>
          <div>
            <button class="btn rounded-pill bg-danger">
              <i class="bi bi-mic-fill text-white"></i></button
            ><span>語音</span>
          </div>
        </div>
        <div class="bottom" @click.prevent="toMusic">
          <iframe
            src="https://widget.kkbox.com/v1/?id=4nKGgtS42aVxYGLbF-&type=playlist&terr=TW&lang=TC"
            allow="autoplay"
            width="625px"
            height="414px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { inject } from 'vue'
export default {
  setup () {
    const now = inject('now')
    //
    const router = useRouter()
    const toMap = () => {
      router.push({ name: 'map' })
    }
    //
    const toMusic = () => {
      router.push({ name: 'music' })
    }

    return { now, toMap, toMusic }
  }
}
</script>

<style scoped src="../assets/home.css"></style>
