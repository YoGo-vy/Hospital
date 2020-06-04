import Utils from '@/helper/utils.js'

// 存放初始化一次的数据
export const AppConst = {
  language: Utils.getCookie('language') || "zh_CN",
  languageKey: 'language', //存在cookie中的key
  user: "hotel",
  projectId: '1', // 项目id
  isZh() {
    return this.language === 'zh_CN'
  },
  getNextLanguageValue() {
    return this.isZh() ? "en_US" : "zh_CN"
  },
}
export default function (Vue) {
  Vue.prototype.AppConst = AppConst
}