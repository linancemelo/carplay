<template>
  <div class="carPlay" style="background: url(https://images.pling.com/img/00/00/51/65/06/1397047/a3e3f9695ca4eb598324bfae04aca763d243.png) no-repeat; background-size: cover;height: 668px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-1 px-0">
          <Sidebar></Sidebar>
        </div>
        <div class="col-11 row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'query-string'
import Sidebar from '@/components/Sidebar.vue'
import { ref, provide } from 'vue'
import axios from 'axios'
export default {
  components: {
    Sidebar
  },
  setup () {
    // 取得KKBOX帳戶token
    const token = ref('')
    const getToken = () => {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const oauth = {
        grant_type: process.env.VUE_APP_GRANTTYPE,
        client_id: process.env.VUE_APP_ID,
        client_secret: process.env.VUE_APP_SECRET
      }
      axios.post('/token', qs.stringify(oauth), config).then((res) => {
        token.value = res.data.access_token
        getPlayList()
      })
    }
    getToken()

    // 取得公開分享的清單
    const id = ref({
      newId: '',
      dailyId: ''
    })
    const getPlayList = () => {
      const url = 'https://api.kkbox.com/v1.1/charts?territory=TW&limit=50'
      const config = {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
      axios.get(url, config).then((res) => {
        // playlist.value = res.data.tracks.data
        id.value.newId = res.data.data[0].id
        id.value.dailyId = res.data.data[1].id
      })
    }
    provide('id', id)

    // 取得用戶目前位置
    const now = ref({
      lati: '',
      long: ''
    })
    const getPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            now.value.lati = position.coords.latitude
            now.value.long = position.coords.longitude
          },
          (error) => {
            alert(error.message)
          }
        )
      } else {
        alert('找不到位置')
      }
    }
    provide('now', now)
    getPosition()
    // return
    return { token, getToken, getPlayList, getPosition }
  }
}
</script>
<style scoped>
  .container-fluid{
    margin: 0 !important;
    padding: 0 !important
  }
  .row{
    margin: 0 !important;
    padding: 0 !important
  }
  iframe{
    padding: 0 !important;
  }
</style>
