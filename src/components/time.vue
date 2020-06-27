<template>
  <div class="hospital-time">
    <div class="time-icon">
      <i class="el-icon-time"></i>
    </div>
    <div class="time-container">
      <div class="date">
        <span>{{ day }}</span>
        <span class="hour">{{ hour }}</span>
      </div>
      <div class="day-hour">
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { day } from '@/constant/time.js'

const pad00 = (str) => String(str).padStart(2, '0')

export default {
  data() {
    return {
      date: '2020-06-07',
      hour: '12:00',
      day: '星期日',
      timer: -1,
    }
  },
  created() {
    this._updateTime()
    this.timer = window.setInterval(() => this._updateTime(), 1000 * 10) // 30s刷新一次
  },
  methods: {
    _updateTime() {
      const date = new Date() // 获取当地时间
      this.day = day[date.getDay()]
      this.date = `${date.getFullYear()}-${pad00(date.getMonth() + 1)}-${pad00(date.getDate())}`
      this.hour = `${pad00(date.getHours())}:${pad00(date.getMinutes())}`
    },
  },
  beforeDestroy() {
    window.clearInterval(this.timer)
  },
}
</script>

<style lang="less" scoped>
.hospital-time {
  height: 100%;
  width: 100%;
  text-align: center;
  .time-icon {
    font-size: 0.6rem;
    float: left;
    color: #00cc99;
  }
  .time-container {
    float: right;
    text-align: left;
    width: calc(100% - 0.78rem);
    .date {
      height: 0.44rem;
      line-height: 0.6rem;
      font-size: 0.26rem;
    }
    .day-hour {
      height: 0.56rem;
      line-height: 0.46rem;
      font-size: 0.3rem;
      color: #00cc99;
      font-size: 0.36rem;
      .hour {
        font-size: 0.26rem;
        font-weight: bold;
        margin-left: 0.2rem;
      }
    }
  }
}
</style>
