<template>
  <div class="sign-in">
    <div class="small-screen">
      <my-header v-bind="headerBind" />
      <div class="mid">
        <div class="current xy-center">
          <div v-if="isDisabled">
            <span>{{ roomDetail.roomName }}处于停诊状态，请14:00后再签到</span>
          </div>
          <div v-else>
            <span class="name">{{ roomDetail.currentPatient.patientName }}</span>
            <span>正在就诊,请耐心等待</span>
          </div>
        </div>
        <div class="buttons xy-center">
          <el-button :disabled="isDisabled" class="btn1" type="primary" @click="onSignIn('referral')">复诊签到</el-button>
          <el-button :disabled="isDisabled" type="primary" @click="onSignIn('missed')">过号签到</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/headerSmall'
import pick from 'lodash/pick'
import utils from '@/helper/utils.js'

export default {
  components: {
    myHeader,
  },
  data() {
    return {
      headerBind: {
        name: '1号诊室',
      },
      roomId: 1,
      roomDetail: {
        currentPatient: {},
      },
    }
  },
  created() {
    this.roomId = utils.getParamByName('roomId') // url获取当前诊室id
    this.initData()
  },
  computed: {
    isDisabled() {
      return this.roomDetail.roomStatus === 0
    },
  },
  methods: {
    async initData() {
      this.roomDetail = await this.$api.getRoomDetail(this.roomId) // 详情:当前就诊
      this.headerBind.name = this.roomDetail.roomName
      console.log('>>>>>>>>>>>>> roomDetailroomDetail >>>>>>>>>>>>>>>>', this.roomDetail)
    },
    onSignIn(type) {
      console.log(type)
    },
  },
}
</script>

<style lang="less">
.sign-in {
  width: 100%;
  height: 100%;
  background: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .small-screen {
    width: 10.24rem;
    height: 7.68rem;
    background-image: linear-gradient(to right, #00c18c 0%, #40c286 57%, #edfd92 100%);
    .mid {
      height: calc(100% - 1.2rem);
      .buttons,
      .current {
        height: 50%;
        font-size: 0.5rem;
        color: white;
      }
      .current {
        .name {
          color: #ecff72;
        }
      }
      .el-button {
        font-size: 0.4rem;
        padding: 0.2rem;
      }
      .btn1 {
        margin-right: 0.6rem;
      }
    }
  }
}
</style>
