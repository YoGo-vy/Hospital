<template>
  <div class="holl">
    <div class="holl-content">
      <div class="holl-top">
        <div class="icon">
          <img src="hospital/static/imgs/ht2.png" alt />
        </div>
        <div class="title">急症诊室</div>
        <div class="time">
          <ht-time />
        </div>
      </div>
      <div class="holl-mid">
        <div v-show="!isShowRoom" class="holl-patient">
          <x-list v-for="patientType in patientTypes" :key="patientType.ref" v-bind="patientType"></x-list>
        </div>
        <div v-show="isShowRoom" class="holl-room">
          <div class="call">
            <span style="margin-right: 1rem;">请C1 XXX到1号诊室</span>
            <span>请S1 XXX到2号诊室</span>
          </div>
          <div class="rooms">
            <y-list v-for="room in rooms" :key="room.ref" v-bind="room"></y-list>
          </div>
        </div>
      </div>
      <div class="holl-bottom">
        <span>
          <i class="el-icon-star-on"></i>
        </span>
        <span>军属优先 危重病人优先</span>
      </div>
    </div>
  </div>
</template>
<script>
// 大厅
import HtTime from '@/components/time'
import xList from '@/components/xList'
import yList from '@/components/yList'
export default {
  components: {
    HtTime,
    xList,
    yList,
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
      isShowRoom: true, // 显示诊室
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
            { id: 44, name: 'S4 张三4' },
            { id: 6, name: 'S6 张三6' },
            { id: 7, name: 'S7 张三7' },
            { id: 8, name: 'S8 张三8' },
            { id: 9, name: 'S9 张三9' },
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
            { id: 6, name: 'S6 张三6' },
            { id: 7, name: 'S7 张三7' },
            { id: 8, name: 'S8 张三8' },
            { id: 9, name: 'S9 张三9' },
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
      rooms: [
        {
          ref: 'room1',
          label: '1号诊室',
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
            { id: 5, name: 'S5 张三5' },
            { id: 6, name: 'S6 张三6' },
            { id: 7, name: 'S7 张三7' },
            { id: 8, name: 'S8 张三8' },
            { id: 9, name: 'S9 张三9' },

            { id: 11, name: 'S11 张三11' },
            { id: 22, name: 'S22 张三22' },
            { id: 33, name: 'S33 张三33' },
            { id: 44, name: 'S44 张三44' },
            { id: 55, name: 'S55 张三55' },
            { id: 66, name: 'S66 张三66' },
            { id: 77, name: 'S77 张三77' },
            { id: 88, name: 'S88 张三88' },
            { id: 99, name: 'S99 张三99' },
          ],
        },
        {
          ref: 'room2',
          label: '2号诊室',
          persons: [
            { id: 1, name: 'S1 张三1' },
            { id: 2, name: 'S2 张三2' },
            { id: 3, name: 'S3 张三3' },
            { id: 4, name: 'S4 张三4' },
            { id: 5, name: 'S5 张三5' },
            { id: 6, name: 'S6 张三6' },
            { id: 7, name: 'S7 张三7' },
            { id: 8, name: 'S8 张三8' },
            { id: 9, name: 'S9 张三9' },

            { id: 11, name: 'S11 张三11' },
            { id: 22, name: 'S22 张三22' },
            { id: 33, name: 'S33 张三33' },
            { id: 44, name: 'S44 张三44' },
            { id: 55, name: 'S55 张三55' },
            { id: 66, name: 'S66 张三66' },
            { id: 77, name: 'S77 张三77' },
            { id: 88, name: 'S88 张三88' },
            { id: 99, name: 'S99 张三99' },
          ],
        },
      ],
      timer: -1,
    }
  },
  methods: {},
  created() {
    this.timer = window.setInterval(() => {
      this.isShowRoom = !this.isShowRoom
    }, 20 * 1000)
  },
  beforeDestroy() {
    window.clearInterval(this.timer)
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
      height: calc(100% - 1.8rem);
      .holl-room {
        height: 100%;
        .call {
          height: 0.8rem;
          line-height: 0.8rem;
          font-size: 0.34rem;
          text-align: center;
          font-weight: bold;
        }
        .rooms {
          height: calc(100% - 0.8rem);
          width: 100%;
        }
      }
    }
  }
}
</style>
