import VueI18n from 'vue-i18n'
import zh from '@/i18n/zh'
import en from '@/i18n/en'
import {
  AppConst
} from './initAppConst'

export default function initI18n(Vue) {
  Vue.use(VueI18n)
  const i18n = new VueI18n({
    locale: AppConst.isZh() ? 'zh' : 'en', // 语言标识
    messages: {
      zh,
      en
    }
  })
  Vue.prototype.SimpleLang = {
    getPageLang(pageName) {
      const name = pageName || this.$options.name
      return this._i18n._vm._data.messages[AppConst.isZh() ? 'zh' : 'en'][name]
    }
  }
  return {
    i18n
  }
}