<template>
  <div class="nurse-page">
    <div class="nurse">
      <div class="body">
        <div class="top0">
          <span>急症排队叫号</span>
        </div>
        <div class="top">
          <el-select v-model="currentRoomId" placeholder="请选择">
            <el-option v-for="item in rooms" :key="item.roomId" :label="getLabel(item)" :value="item.roomId"> </el-option>
          </el-select>
        </div>
        <div class="mid">
          <el-table
            v-if="currentRoom && currentRoom.patients"
            ref="multipleTable"
            :data="currentRoom.patients"
            tooltip-effect="dark"
            highlight-current-row
            style="width: 100%;"
            height="100%"
            stripe
            @current-change="onSelect"
          >
            <el-table-column width="100" label="序号" prop="number" />
            <el-table-column label="姓名">
              <template slot-scope="scope">
                <div :class="['patient-name', scope.row.patientId === currentRow.patientId && isShowBtns ? 'text-left' : '']">
                  <span>{{ scope.row.patientName }}</span>
                  <span v-if="scope.row.patientId === currentRow.patientId" class="handle-btns">
                    <span v-if="isShowBtns">
                      <el-button class="small-btn2" size="mini" type="danger" @click="onMove">删除</el-button>
                      <el-button class="small-btn2" size="mini" type="success" @click="onDelete">转诊</el-button>
                    </span>
                    <i :class="[isShowBtns ? 'el-icon-arrow-right' : 'el-icon-arrow-left']" @click="onShowBtns"></i>
                  </span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="bottom1">
          <el-button v-for="button in buttons" :key="button.eventKey" :class="['small-btn', button.class]" :eventKey="button.eventKey" size="small" @click="onClickBtn(button)">
            {{ button.label }}
          </el-button>
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
        { label: '置顶', class: '', eventKey: 'onToTop' },
        { label: '上移', class: '', eventKey: 'onMoveUp' },
        { label: '下移', class: '', eventKey: 'onMoveDown' },
        { label: '确定', class: 'green', eventKey: 'onOK' },
        { label: '取消', class: 'gray', eventKey: 'onCancel' },
      ],
      timer: -1,
      rooms: [],
      currentRoomId: 1,
      currentRow: {}, // 当前选中的行
      isShowBtns: false,
      originIds: [],
    }
  },
  created() {
    this.initData()
    // this.timer = setInterval(() => this.initData(), 10 * 1000)
  },
  computed: {
    currentRoom() {
      return this.rooms.find(({ roomId }) => roomId === this.currentRoomId)
    },
    // 没有选中任何行
    isNoCurrentRow() {
      return JSON.stringify(this.currentRow) === '{}'
    },
  },
  beforeDestroy() {
    // window.clearInterval(this.timer)
  },
  methods: {
    async initData() {
      const data = await this.$api.getRooms()
      data.rooms.forEach((room) => {
        room.patients.forEach((patient, index) => (patient.number = index + 1))
      })
      this.rooms = data.rooms
    },
    // option label
    getLabel(item) {
      return `${item.roomName}(${item.patients.length}人)`
    },
    // CheckBox change
    onSelect(val) {
      this.currentRow = val || {}
      this.isShowBtns = false
    },
    onShowBtns() {
      this.isShowBtns = !this.isShowBtns
    },
    onOK() {},
    onCancel() {
      this.currentRow = {}
      this.initData()
    },
    onClickBtn(button) {
      if (!button || this.isNoCurrentRow) return
      this[button.eventKey] && this[button.eventKey]()
    },
    // 置顶
    onToTop() {
      this.currentRow.number = -1
      this.reOrder()
    },
    // 上移
    onMoveUp() {
      this.currentRow.number -= 2
      this.reOrder()
    },
    // 下移
    onMoveDown() {
      this.currentRow.number += 2
      this.reOrder()
    },
    // 删除
    onDelete() {},
    // 转移
    onMove() {},
    // 重新排序
    reOrder() {
      this.currentRoom.patients = this.currentRoom.patients.sort((itemA, itemB) => itemA.number - itemB.number)
      this.currentRoom.patients.forEach((item, index) => (item.number = index + 1))
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
    height: 6.6rem;
    border: 1px solid;
    .body {
      margin: 0.15rem;
      width: calc(100% - 0.3rem);
      height: calc(100% - 0.3rem);
      .top0 {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .top {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.2rem;
      }
      .mid {
        height: calc(100% - 1.5rem);
        margin-top: 0.1rem;
        overflow-y: auto;
        .el-table {
          .cell {
            text-align: center;
          }
          tr > td {
            padding: 0;
          }
          tr > td > .cell {
            height: 0.4rem;
            line-height: 0.4rem;
          }
          tr.current-row > td {
            background-color: rgb(4, 193, 139);
          }
        }
        .patient-name {
          width: 100%;
          height: 100%;
          position: relative;
          .handle-btns {
            position: absolute;
            right: 0;
          }
        }
        .text-left {
          text-align: left;
        }
      }
      .bottom1 {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        .green {
          background: rgb(4, 193, 139);
          border: none;
        }
        .gray {
          background: rgb(220, 215, 219);
          border: none;
        }
      }
      .small-btn {
        padding: 0.08rem 0.2rem;
        font-size: 0.12rem;
      }
      .small-btn2 {
        padding: 0.06rem 0.2rem;
        font-size: 0.12rem;
      }
      .long-btn {
        padding: 0.08rem 0.58rem;
      }
    }
  }
}
</style>
