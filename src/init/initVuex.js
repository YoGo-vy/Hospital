import Vuex from 'vuex'

export default function initVuex(Vue) {
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      path: 'Room',
    },
    mutations: {
      changePath(state, path) {
        state.path = path
      },
    },
  })
  return {
    store,
  }
}
