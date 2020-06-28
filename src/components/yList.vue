<template>
  <div class="y-list">
    <div class="y-list-icon center">
      <div class="img-border">
        <div style="text-align: center;">
          <img src="hospital/static/imgs/icon_zhen.png" alt />
        </div>
      </div>
    </div>
    <div class="right center">
      <div>
        <div class="room-name">
          <span>{{ label }}</span>
          <span class="number">[{{ `${persons.length}` }}人]</span>
        </div>
        <div class="room-persons">
          <div v-for="person in persons" :key="person.id" class="person">
            <span>{{ person.number }}</span>
            <span>{{ person.name }}</span>
          </div>
        </div>
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
      default: '急诊1诊室',
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
  background: rgba(255, 255, 255, 0.81);
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
    width: calc(100% - 1.3rem);
    position: absolute;
    top: 0;
    padding-left: 0.4rem;
    .room-name {
      font-size: 0.4rem;
      margin-bottom: 0.05rem;
      color: #3bcc81;
      .number {
        color: #ff7271;
      }
    }
    .room-persons {
      font-size: 0.32rem;
      .person {
        display: inline-block;
        width: 1.8rem;
      }
    }
  }
}
</style>
