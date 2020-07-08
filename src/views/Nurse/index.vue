<template>
  <div class="nurse-page">
    <div class="nurse">
      <div class="body">
        <div class="top">
          <div class="left">
            <span>1号诊室 : </span>
            <span class="red">50</span>
            <span>人</span>
          </div>
          <div class="right">
            <span>2号诊室 : </span>
            <span class="red">61</span>
            <span>人</span>
          </div>
        </div>
        <div class="mid"></div>
        <div class="bottom1">
          <el-button class="small-btn" v-for="button in buttons" :key="button.eventKey" :eventKey="button.eventKey" size="small" @click="onClickBtn(button)">
            {{ button.label }}
          </el-button>
        </div>
        <div class="bottom2">
          <el-button class="small-btn long-btn green" size="small" @click="onOK"> 确认 </el-button>
          <el-button class="small-btn long-btn gray" size="small" @click="onCancel"> 取消 </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { disabled: false, isChecked: false, label: '置顶', eventKey: 'onToTop' },
        { disabled: false, isChecked: false, label: '上移', eventKey: 'onMoveUp' },
        { disabled: false, isChecked: false, label: '下移', eventKey: 'onMoveDown' },
        { disabled: false, isChecked: false, label: '删除', eventKey: 'onDelete' },
        { disabled: false, isChecked: false, label: '转移', eventKey: 'onMove' },
      ],
    }
  },
  methods: {
    onOK() {},
    onCancel() {},
    onClickBtn(button) {
      if (!button) return
      this[button.eventKey] && this[button.eventKey]()
    },
    onToTop() {
      // 置顶
    },
    onMoveUp() {
      // 上移
    },
    onMoveDown() {
      // 下移
    },
    onDelete() {
      // 删除
    },
    onMove() {
      // 转移
    },
  },
}
</script>

<style lang="less">
.nurse-page {
  width: 100%;
  height: 100%;
  background: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .nurse {
    width: 4rem;
    height: 6rem;
    border: 1px solid;
    .body {
      margin: 0.15rem;
      width: calc(100% - 0.3rem);
      height: calc(100% - 0.3rem);
      .top {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.2rem;
        .red {
          color: #ff7271;
        }
      }
      .mid {
        height: calc(100% - 1.2rem);
      }
      .bottom1 {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .bottom2 {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        .green {
          background: rgb(4, 193, 139);
          border: none;
          margin-right: 0.75rem;
        }
        .gray{
          background: rgb(220, 215, 219);
          border: none;
        }
      }
      .small-btn {
        padding: 0.08rem 0.2rem;
        font-size: 0.12rem;
      }
      .long-btn {
        padding: 0.08rem 0.58rem;
      }
    }
  }
}
</style>
