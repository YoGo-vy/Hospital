import VueCompositionApi from '@vue/composition-api'
import {
  useProvider
} from '@/store'

export default function initVueComposition(Vue) {
  Vue.use(VueCompositionApi)

  return {
    setup() {
      useProvider()
      return {}
    }
  }
}