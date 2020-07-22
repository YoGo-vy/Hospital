<template>
  <div :class="['select-span', room.isSelect ? 'select-span-active' : '']" @click="$emit('click', room)">
    <span>{{ room.name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    room: {
      type: Object,
      default() {
        return {
          name: '1号诊室',
          isSelect: false,
        }
      },
    },
  },
  data() {
    return {}
  },
  created() {},
}
</script>
<style lang="less">
.select-span {
  display: inline-block;
  position: relative;
  min-width: 0.9rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  // border: 1px solid;
  margin-right: 0.2rem;
  background: rgb(242, 242, 242);
}
.select-span-active {
  background: greenyellow;
}
</style>
