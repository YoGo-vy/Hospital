<template>
  <div id="app">
    <!-- <Top ref="Top" /> -->
    <div class="mid-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Top from '@/views/Top.vue'

export default {
  name: 'app',
  components: {
    Top,
  },
  created() {},
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Microsoft Yahei', sans-serif;
  background-image: linear-gradient(to right, #00c18c 0%,#40c286 57%, #edfd92 100%);
}
.mid-content {
  width: 100%;
  /* height: calc(100% - 60px); */
  height: 100%;
}
</style>
