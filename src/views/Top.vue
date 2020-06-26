<template>
  <div class="header">
    <div v-for="router in routers" :class="['menu', router.path == currentRouter ? 'active' : '']" :key="router.path" @click="onClickTop(router)">
      {{ router.label }}
    </div>
    <div :title="text.languageTitle" @click="onChangeLanguage">
      {{ text.nextLanguage }}
    </div>
  </div>
</template>

<script>
import Utils from '@/helper/utils.js'
export default {
  name: 'Top',
  data() {
    const text = this.SimpleLang.getPageLang.call(this)
    return {
      text: {
        ...text,
      },
      currentRouter: '/Holl',
      search: {
        value: '',
      },
      routers: [
        {
          path: '/UIDemo',
          isDisable: false, //是否可点击
          label: 'UIDemo',
        },
        {
          path: '/Holl',
          isDisable: false, //是否可点击
          label: '病人分类',
        },
        {
          path: '/Room',
          isDisable: false, //是否可点击
          label: '诊室',
        },
      ],
    }
  },
  created() {
    this.onClickTop({
      path: '/Holl',
    })
  },
  watch: {},
  methods: {
    //点击路由
    onClickTop({ path = '/Holl', isDisable = false }) {
      if (isDisable && this.currentRouter == path) return
      this.currentRouter = path
      this.$router.push(path)
    },
    //切换国际化
    onChangeLanguage() {
      Utils.setCookie(this.AppConst.languageKey, this.AppConst.getNextLanguageValue())
      window.location.reload()
    },
  },
}
</script>

<style scoped>
.header {
  background: black;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #a3b4ad;
  display: grid;
  text-align: center;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 60px;
}

.user-icon img {
  width: 54px;
  height: 54px;
  vertical-align: baseline;
  border-radius: 50%;
  margin-top: 3px;
}

.menu:hover {
  background: gray;
  color: white;
}

.active,
.title {
  color: white;
  font-weight: bold;
}

.search input {
  vertical-align: baseline;
  height: 26px;
  border-radius: 13px;
  background: #394149;
  color: white;
  text-indent: 13px;
  width: 100%;
  font-size: 12px;
}

.search i {
  margin-left: -20px;
  color: white;
}
</style>
