<template>
  <div class="nurse-page">
    <div class="nurse">
      <div class="body">
        <div class="title">
          <div class="left">
            <span>1号诊室</span>
          </div>
          <div class="right">
            <el-switch v-model="isWork"> </el-switch>
            <!-- <el-button @click="onChangeStatus">停诊</el-button> -->
          </div>
        </div>
        <div class="current">
          <div class="left">
            <span>当前就诊 : C1 XXX</span>
          </div>
          <div class="right">
            <span>候诊人数 : 61</span>
          </div>
        </div>
        <div class="call">
          <el-button class="call-btn" type="success" @click="onCall">呼叫 C2 C1XXX</el-button>
        </div>
        <div class="pass">
          <el-button class="small-btn long-btn gray" size="small" @click="onPass">过号</el-button>
          <el-button class="small-btn long-btn green" size="small" @click="onArrived">到诊</el-button>
        </div>
        <div class="mid">
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" highlight-current-row style="width: 100%;" height="100%">
            <el-table-column width="100" label="序号" prop="number" />
            <el-table-column prop="patientName" label="姓名" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { patientId: '60006', number: 1, patientName: '马佩煜' },
        { patientId: '60007', number: 2, patientName: '王新定' },
        { patientId: '60004', number: 3, patientName: '陈美丽' },
        { patientId: '60005', number: 4, patientName: '马亚军' },
        { patientId: '60008', number: 5, patientName: '杜亮' },
        { patientId: '60009', number: 6, patientName: '王爱' },
        { patientId: '60010', number: 7, patientName: '朱建华' },
        { patientId: '60011', number: 8, patientName: '王辉' },
        { patientId: '60012', number: 9, patientName: '王泽' },
        { patientId: '60013', number: 10, patientName: '刘明利' },
        { patientId: '60014', number: 11, patientName: '张亚平' },
        { patientId: '60015', number: 12, patientName: '刘星语' },
        { patientId: '60016', number: 13, patientName: '徐忠义' },
        { patientId: '60017', number: 14, patientName: '王文斌' },
        { patientId: '60018', number: 15, patientName: '孙俊' },
        { patientId: '60019', number: 16, patientName: '孙逸馨' },
        { patientId: '60020', number: 17, patientName: '任军' },
      ],
      isWork: true,
    }
  },
  created() {},
  computed: {},
  methods: {
    // 切换就诊状态
    onChangeStatus() {},
    // 呼叫
    onCall() {},
    // 过号
    onPass() {},
    // 到诊
    onArrived() {},
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
    height: 6.6rem;
    border: 1px solid;
    .body {
      margin: 0.15rem;
      width: calc(100% - 0.3rem);
      height: calc(100% - 0.3rem);
      .title,
      .call {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .title {
        .right {
          line-height: 0.4rem;
        }
      }
      .current {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.2rem;
      }
      .pass {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        .green {
          background: rgb(4, 193, 139);
          border: none;
        }
        .gray {
          background: rgb(220, 215, 219);
          border: none;
          margin-right: 0.59rem;
        }
      }
      .mid {
        height: calc(100% - 2.1rem);
        margin-top: 0.1rem;
        overflow-y: auto;
        .el-table {
          .cell {
            text-align: center;
          }
          tr.current-row > td {
            background-color: rgb(4, 193, 139);
          }
        }
      }
      .small-btn {
        padding: 0.08rem 0.2rem;
        font-size: 0.12rem;
      }
      .long-btn {
        padding: 0.08rem 0.58rem;
        font-size: 0.16rem;
      }
    }
  }
  .call-btn {
    width: 100%;
    height: 0.4rem;
    font-size: 0.2rem;
  }
}
</style>
