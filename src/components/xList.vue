<template>
  <!-- 一行 -->
  <div class="x-list">
    <!-- 病人类型 -->
    <div class="x-list-label">
      <span>{{ showLabel }}</span>
    </div>
    <!-- 病人,能左右滚动 -->
    <div class="x-list-content">
      <div v-for="person in persons" :key="person.id" class="person">
        <span>{{ person.name }}</span>
      </div>
    </div>
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
    label: {
      type: String,
      default: '类型名称',
    },
  },
  data() {
    return {}
  },
  computed: {
    showLabel() {
      return `${this.label}(${this.persons.length}人)`
    },
  },
  created() {},
}
</script>
<style lang="less">
.x-list {
  width: 100%;
  flex: 1;
  font-size: 0.3rem;
  .x-list-label {
    float: left;
    width: 2.6rem;
    height: 100%;
    text-align: right;
    line-height: 1.09rem;
    span {
      margin-right: 0.2rem;
    }
  }
  .x-list-content {
    width: calc(100% - 2.7rem);
    white-space: nowrap;
    height: 100%;
    float: right;
    overflow: hidden;
    .person {
      display: inline-block;
      width: 2rem;
      line-height: 1.09rem;
      text-align: center;
    }
  }
}
</style>
