<template>
  <div class="holl">
    <div class="holl-content">
      <my-header />
      <div class="holl-mid">
        <div class="holl-patient">
          <x-list v-for="(person, index) in currentData" :key="index" v-bind="person" :colorIndex="index" />
        </div>
        <my-bottom />
      </div>
    </div>
  </div>
</template>
<script>
// 大厅
import chunk from 'lodash/chunk'
import { CHANGE_TIME } from '@/constant/time.js'
import xList from '@/components/xList'
import myHeader from '@/components/header'
import myBottom from '@/components/bottom'
export default {
  components: {
    xList,
    myHeader,
    myBottom,
  },
  data() {
    return {
      chunkData: [],
      pageNumber: 0, // 0 和 1切换
    }
  },
  created() {
    this.initData()
  },
  computed: {
    currentData() {
      return this.chunkData[this.pageNumber]
    },
  },
  activated() {
    this.pageNumber = 0
    this.initData()
  },
  methods: {
    async initData() {
      const data = await this.$api.getLevels()
      this.chunkData = chunk(data.levels, 4)

      setTimeout(() => {
        this.pageNumber = 1

        setTimeout(() => {
          this.$store.commit('changePath', 'Room')
        }, CHANGE_TIME)
      }, CHANGE_TIME)
    },
  },
}
</script>
<style lang="less">
.holl {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .holl-content {
    width: 100%;
    height: 100%;
    .holl-mid {
      height: calc(100% - 2.4rem);
      .holl-patient {
        height: 100%;
        width: calc(100% - 1.7rem);
        margin-left: 0.8rem;
      }
    }
  }
}
</style>
