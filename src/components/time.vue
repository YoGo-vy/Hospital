<template>
  <div class="hospital-time">
    <div class="date">
      <span>{{ date }}</span>
    </div>
    <div class="day-hour">
      <span>{{ day }}</span>
      <span class="hour">{{ hour }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2020年05月31日',
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
  font-size: 0.24rem;
  text-align: center;
  .date {
    height: 0.44rem;
    line-height: 0.44rem;
  }
  .day-hour {
    height: 0.56rem;
    line-height: 0.56rem;
    .hour {
      font-size: 0.26rem;
      font-weight: bold;
      margin-left: 0.2rem;
    }
  }
}
</style>
