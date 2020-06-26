<template>
  <div id="app">
    <Top ref="Top" />
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
  background: rgb(235, 252, 146)
}
.mid-content {
  width: 100%;
  height: calc(100% - 60px);
}
</style>
