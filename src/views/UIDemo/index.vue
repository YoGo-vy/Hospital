<template>
  <div>
    <div class="button-bar">
      <el-button
        v-for="button in buttons"
        :key="button.eventKey"
        :eventKey="button.eventKey"
        @click="onClickBtn(button)"
        type="primary"
      >
        <span>
          <i :class="button.icon"></i>
          <span>{{ button.label }}</span>
        </span>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIDemo",
  components: {
  },
  data() {
    // 读取pageLang,this.$t('UIDemo.message')这样调用比较复杂
    const text = this.SimpleLang.getPageLang.call(this, "UIDemo");
    return {
      text,
      val: 2,
      buttons: [
        {
          eventKey: "onMessage",
          icon: "fa fa-apple",
          label: text.message,
        },
        {
          label: text.confirm,
          eventKey: "onConfirm",
          icon: "fa fa-apple",
        },
        {
          label: text.loading,
          eventKey: "onLoading",
          icon: "fa fa-apple",
        },
        {
          label: text.ajax,
          eventKey: "onAjax",
          icon: "fa fa-apple",
        },
        {
          label: text.dialog,
          eventKey: "onDialog",
          icon: "fa fa-apple",
        },
      ],
    };
  },
  created() {
    this.$root.$on("vue2 eventBus", (data) => {
      console.log(data);
      debugger;
    });
    this.$root.$on("vue3 eventBus", (data) => {
      console.log(data);
      debugger;
    });
  },
  watch: {},
  methods: {
    onClickBtn(button) {
      if (!button) return;
      this[button.eventKey] && this[button.eventKey]();
    },
    //ElementUI消息框
    onMessage() {
      this.SimpleUI.error(
        `this.SimpleUI.error('error消息框内容') ${this.AppConst.user}`
      );
      // this.SimpleUI.message('message')
      // this.SimpleUI.error(`this.SimpleUI.error('error消息框内容') showClose`,{showClose:true})
      // this.SimpleUI.success('success消息框内容')
      // this.SimpleUI.warning('warning消息框内容')
      // this.SimpleUI.warning('message消息框内容')
    },
    onConfirm() {
      this.SimpleUI.confirm({
        message: "此操作将永久删除该文件, 是否继续?",
        //此处如果要访问当前作用域的话要用箭头函数
        okFn: () => {
          this.SimpleUI.success(`确认回调 访问vm.val = ${this.val}`);
        },
      });
    },
    //loading示例
    onLoading() {
      this.SimpleUI.Loading(true); //显示
      this.SimpleUI.warning("5s后遮罩自动消失");
      setTimeout(() => {
        this.SimpleUI.Loading(false); //关闭
      }, 5000);
    },
    //ajax 请求
    onAjax() {
      this.$api.getJson().then((res) => {
        this.SimpleUI.success(res.data.from);
      });
    },
    //弹框Demo
    onDialog() {},
  },
};
</script>

<style scoped>
.button-bar {
  height: 34px;
  vertical-align: baseline;
  line-height: 34px;
  padding-left: 10px;
  border-bottom: 1px solid black;
}
</style>
