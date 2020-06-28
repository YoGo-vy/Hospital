<template>
  <div class="room">
    <div class="holl-content">
      <my-header :heightStyle="{ height: '1.2rem' }" />
      <div class="holl-mid">
        <div class="holl-room">
          <notice />
          <div class="rooms">
            <y-list v-for="room in rooms" :key="room.ref" v-bind="room"></y-list>
          </div>
        </div>
        <my-bottom />
      </div>
    </div>
  </div>
</template>
<script>
// 大厅
import yList from '@/components/yList'
import myHeader from '@/components/header'
import myBottom from '@/components/bottom'
import notice from '@/components/notice'
export default {
  components: {
    yList,
    myBottom,
    myHeader,
    notice,
  },
  data() {
    return {
      rooms: [
        {
          ref: 'room1',
          label: '急诊1诊室',
          persons: [
            { number: 'R1', id: 1, name: '张三' },
            { number: 'R2', id: 2, name: '张三2' },
            { number: 'R3', id: 3, name: '张三四' },
            { number: 'R4', id: 4, name: '张三4' },
            { number: 'R5', id: 5, name: '张三5' },
            { number: 'R6', id: 6, name: '张三6' },
            { number: 'R7', id: 7, name: '张三7' },
            { number: 'R8', id: 8, name: '张三8' },
          ],
        },
        {
          ref: 'room2',
          label: '急诊2诊室',
          persons: [
            { number: 'R1', id: 1, name: '张三1' },
            { number: 'R2', id: 2, name: '张三2' },
            { number: 'R3', id: 3, name: '张三3' },
            { number: 'R4', id: 4, name: '张三4' },
            { number: 'R5', id: 5, name: '张三5' },
            { number: 'R6', id: 6, name: '张三6' },
          ],
        },
        {
          ref: 'room3',
          label: '急诊3诊室',
          persons: [
            { number: 'R1', id: 1, name: '张三1' },
            { number: 'R2', id: 2, name: '张三2' },
            { number: 'R3', id: 3, name: '张三3' },
            { number: 'R4', id: 4, name: '张三4' },
          ],
        },
      ],
    }
  },
  methods: {},
  created() {},
  beforeDestroy() {},
}
</script>
<style lang="less">
.room {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .holl-content {
    width: 100%;
    height: 100%;
    .holl-mid {
      height: calc(100% - 2rem);
      .holl-room {
        height: 100%;
        .rooms {
          height: calc(100% - 0.8rem);
          width: calc(100% - 1.7rem);
          margin-left: 0.8rem;
        }
      }
    }
  }
}
</style>
