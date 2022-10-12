<template>
  <iframe
    width="620"
    height="668"
    :src="`https://maps.google.com/maps?q=${now.lati},%20${now.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`"
    frameborder="0"
    scrolling="no"
  ></iframe>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const now = inject('now')
    return {
      now
    }
  }
}
</script>

<style></style>
