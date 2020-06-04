// import initElement from './initElement'
// import initAppConst from './initAppConst'
// import initI18n from './initI18n'
// import initAPI from './initAPI'
// import initRouter from './initRouter'
// import initVueComposition from './initVueComposition'

const requireContext = require.context('./', false, /\.js$/)
const initFns = requireContext.keys()
  .filter(fileName => !fileName.includes('index'))
  .map(fileName => requireContext(fileName).default)


// 往Vue原型上追加内容，简化开发调用，原型上追加内容是不会影响性能的，因为原型在内存中只存在一份
export default function initVue(Vue) {
  // initElement(Vue)
  // initAppConst(Vue)
  // const i18n = initI18n(Vue)
  // const router = initRouter(Vue)
  // initAPI(Vue)
  // const setup = initVueComposition(Vue)

  // let initResult = {}
  // initFns.forEach(fn => {
  //   initResult = {
  //     ...initResult,
  //     ...fn(Vue)
  //   }
  // })
  // return initResult

  return initFns
    .map(fn => fn(Vue)) // 执行初始化
    .filter(result => result) // 过滤没有返回值
    .reduce((total, result) => ({ // 拼接返回值
      ...total,
      ...result
    }))
}