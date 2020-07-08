// 路由配置
import VueRouter from 'vue-router'
import UIDemo from '@/views/UIDemo'
import Holl from '@/views/Holl'
import Room from '@/views/Room'
import SignIn from '@/views/SignIn'
import Nurse from '@/views/Nurse'
import Doctor from '@/views/Doctor'

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
  {
    path: '/SignIn',
    component: SignIn,
  },
  {
    path: '/Nurse',
    component: Nurse,
  },
  {
    path: '/Doctor',
    component: Doctor,
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
