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
export default {
  data() {
    return {
      date: '2020-06-07',
      hour: '12:00',
      day: '星期日',
    }
  },
  created() {
    // this.timer = setInterval(() => {
    //   const date = new Date() // 获取当地时间
    // }, 1000)
  },
  beforeDestroy() {},
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
