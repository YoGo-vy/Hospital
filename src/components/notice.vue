<template>
  <div class="notice">
    <span v-for="(person, index) in persons">
      <span>请</span>
      <span class="yellow">{{ person.number }}</span>
      <span class="yellow">{{ person.name }}</span>
      <span>到</span>
      <span class="red">{{ person.room }}</span>
      <span>号诊室</span>
      <span v-if="_isHadComma(index)">,</span>
    </span>
  </div>
</template>
<script>
// 通知
export default {
  props: {
    persons: {
      type: Array,
      default() {
        return [
          { number: 'D7', id: 1, name: '杨应兰', room: '1' },
          { number: 'S8', id: 2, name: '卜既虎', room: '2' },
        ]
      },
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    _isHadComma(index) {
      return index < this.persons.length - 1
    },
  },
}
</script>
<style lang="less">
.notice {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  text-align: center;
  color: white;
  .yellow {
    color: rgb(236, 255, 114);
  }
  .red {
    color: #fe5d5d;
  }
}
</style>
