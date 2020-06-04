import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import {
  Message,
  MessageBox,
  Loading
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
import 'static/css/fixElement.css' //放在elementUI css后面

const ConfirmOptions = {
  lockScroll: false, //可拖动
  closeOnClickModal: false, //点击遮罩不消失
  customClass: "ht-message-box"
}

// 可追加参数易于调用的elementUI
const messageFnBuilder = (type) => (message = '消息', options = {}) => Message({
  ...options,
  message,
  type
});

export const SimpleUI = { // 简化elementUI的调用
  success: messageFnBuilder('success'),
  error: messageFnBuilder('error'),
  warning: messageFnBuilder('warning'),
  message: messageFnBuilder(),
  confirm({
    message,
    title = "提示",
    okFn = () => {},
    cancelFn = () => {},
    options = {}
  }) {
    MessageBox
      .confirm(message, title, {
        ...ConfirmOptions,
        ...options
      })
      .then(() => okFn())
      .catch(() => cancelFn())
  },
  //elementUI 遮罩
  _loading: null,
  Loading(isShowLoading = true) {
    if (isShowLoading) {
      this._loading = Loading.service({
        fullscreen: true
      })
    } else {
      this._loading && (this._loading.close());
    }
  }
}

export default function initElemnt(Vue) {
  Vue.use(ElementUI)
  locale.use(zhLocale); //element 国际化

  Vue.prototype.SimpleUI = SimpleUI
}