<template>
  <div class="holl">
    <div class="holl-content">
      <my-header />
      <div class="holl-mid">
        <div class="holl-patient"></div>
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
    const typeMapLabel = {
      soldier: '军人及家属',
      emergency3: '急症三级',
      emergency4: '急症四级',
      noEmergency: '非急诊',
      referral: '复诊患者',
      missed: '过号患者',
    }
    return {
      patientTypes: [
        {
          // 军人及家属
          ref: 'soldier',
          label: typeMapLabel.soldier,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 11, name: 'S4 张三4' },
            { id: 22, name: 'S4 张三4' },
            { id: 33, name: 'S4 张三4' },
          ],
        },
        {
          // 急诊三级
          ref: 'emergency3',
          label: typeMapLabel.emergency3,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
            { id: 5, name: 'S5 张三5' },
          ],
        },
        {
          // 急诊四级
          ref: 'emergency4',
          label: typeMapLabel.emergency4,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
          ],
        },
        {
          // 非急诊
          ref: 'noEmergency',
          label: typeMapLabel.noEmergency,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
          ],
        },
        {
          // 复诊患者
          ref: 'referral',
          label: typeMapLabel.referral,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
          ],
        },
        {
          // 过号患者
          ref: 'missed',
          label: typeMapLabel.missed,
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
          ],
        },
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
      height: calc(100% - 2.3rem);
      .holl-patient {
        height: 100%;
        width: calc(100% - 0.4rem);
        margin-left: 0.4rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
