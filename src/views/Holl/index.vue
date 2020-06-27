<template>
  <div class="holl">
    <div class="holl-content">
      <my-header />
      <div class="holl-mid">
        <div class="holl-patient">
          <x-list v-for="(person, index) in patientTypes" :key="person.ref" v-bind="person" :colorIndex="index" />
        </div>
        <my-bottom />
      </div>
    </div>
  </div>
</template>
<script>
// 大厅
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
      patientTypes: [
        {
          // 军人及家属
          ref: 'soldier',
          type: 'soldier',
          persons: [
            { number: 'R1', id: 1, name: '张三1' },
            { number: 'R2', id: 2, name: '张三2' },
            { number: 'R3', id: 3, name: '张三3' },
            { number: 'R4', id: 4, name: '张三4' },
            { number: 'R5', id: 5, name: '张三5' },
            { number: 'R6', id: 6, name: '张三6' },
            { number: 'R7', id: 7, name: '张三7' },
            { number: 'R8', id: 8, name: '张三8' },
          ],
        },
        {
          // 急诊三级
          ref: 'emergency3',
          type: 'emergency3',
          persons: [
            { number: 'R1', id: 1, name: '李富贵' },
            { number: 'R2', id: 2, name: '李四' },
            { number: 'R3', id: 3, name: '赵钱孙' },
            { number: 'R4', id: 4, name: '二蛋' },
          ],
        },
        {
          // 急诊四级
          ref: 'emergency4',
          type: 'emergency4',
          persons: [
            { number: 'R1', id: 1, name: '西京1' },
            { number: 'R2', id: 2, name: '西京2' },
            { number: 'R3', id: 3, name: '西京3' },
          ],
        },
        {
          // 非急诊
          ref: 'noEmergency',
          type: 'noEmergency',
          persons: [
            { number: 'R1', id: 1, name: '张三1' },
            { number: 'R2', id: 2, name: '张三2' },
          ],
        },
        // {
        //   // 复诊患者
        //   ref: 'referral',
        //   type: 'referral',
        //   persons: [
        //     { number: 'R1', id: 1, name: '张三1' },
        //     { number: 'R2', id: 2, name: '张三2' },
        //     { number: 'R3', id: 3, name: '张三3' },
        //     { number: 'R4', id: 4, name: '张三4' },
        //     { number: 'R5', id: 5, name: '张三5' },
        //     { number: 'R6', id: 6, name: '张三6' },
        //     { number: 'R7', id: 7, name: '张三7' },
        //     { number: 'R8', id: 8, name: '张三8' },
        //   ],
        // },
        // {
        //   // 过号患者
        //   ref: 'missed',
        //   type: 'missed',
        //   persons: [
        //     { number: 'R1', id: 1, name: '张三1' },
        //     { number: 'R2', id: 2, name: '张三2' },
        //     { number: 'R3', id: 3, name: '张三3' },
        //     { number: 'R4', id: 4, name: '张三4' },
        //     { number: 'R5', id: 5, name: '张三5' },
        //     { number: 'R6', id: 6, name: '张三6' },
        //     { number: 'R7', id: 7, name: '张三7' },
        //     { number: 'R8', id: 8, name: '张三8' },
        //   ],
        // },
      ],
    }
  },
  methods: {},
  beforeDestroy() {},
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
