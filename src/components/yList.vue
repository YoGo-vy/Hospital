<template>
  <!-- 一行 -->
  <div class="y-list">
    <div class="y-list-icon center">
      <div class="img-border">
        <div style="text-align: center;">
          <img src="hospital/static/imgs/icon_zhen.png" alt />
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  props: {
    persons: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
}
</script>
<style lang="less">
.y-list {
  width: 100%;
  height: calc(33% - 0.3rem);
  font-size: 0.3rem;
  background: white;
  margin-top: 0.3rem;
  padding-left: 0.6rem;
  border-radius: 0.3rem;
  position: relative;
  .y-list-icon {
    width: 1.2rem;
    margin-left: -1.2rem;
    .img-border {
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: rgb(2, 193, 140);
      border-radius: 50%;
      img {
        width: 1rem;
      }
    }
  }
  .right {
    background: yellowgreen;
    height: 100%;
    width: calc(100% - 0.9rem);
    position: absolute;
    top: 0;
  }
}
</style>
