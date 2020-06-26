// 路由配置
import VueRouter from 'vue-router'
import UIDemo from '@/views/UIDemo'
import Holl from '@/views/Holl'
import Room from '@/views/Room'

const routes = [
  {
    path: '/UIDemo',
    component: UIDemo,
  },
  {
    path: '/Holl',
    component: Holl,
  },
  {
    path: '/Room',
    component: Room,
  },
]

const router = new VueRouter({
  routes,
})

export default function initRouter(Vue) {
  Vue.use(VueRouter)
  return {
    router,
  }
}
