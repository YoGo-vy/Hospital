const requireContext = require.context('./', false, /\.js$/)
const initFns = requireContext
  .keys()
  .filter((fileName) => !fileName.includes('index'))
  .map((fileName) => requireContext(fileName).default)

// 往Vue原型上追加内容，简化开发调用，原型上追加内容是不会影响性能的，因为原型在内存中只存在一份
export default function initVue(Vue) {
  return initFns
    .map((fn) => fn(Vue)) // 执行初始化
    .filter(Boolean) // 过滤没有返回值
    .reduce((total, result) => ({
      // 拼接返回值
      ...total,
      ...result,
    }))
}
