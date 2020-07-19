<template>
  <div class="index">
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Room" target="blank">首页</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/SignIn" target="blank">签到</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Nurse" target="blank">排队</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Doctor?roomId=1" target="blank">叫号:诊室1</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Doctor?roomId=2" target="blank">叫号:诊室2</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Doctor?roomId=3" target="blank">叫号:诊室3</a></div>
    <div class="link-item"><a href="https://7sugou.cn/hospital/dist/index.html#/Doctor?roomId=4" target="blank">叫号:诊室4</a></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.index {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #00c18c 0%, #40c286 57%, #edfd92 100%);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .link-item {
    display: flex;
    height: 1rem;
    font-size: 0.3rem;
    a {
      color: white;
    }
    a:hover{
      color: blue;
    }
  }
}
</style>
