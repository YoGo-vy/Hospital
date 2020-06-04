// vue3 vuex 替代方案
import {
  useBooleanFlagProvider,
  useBooleanFlagInject
} from './BooleanFlag'

export {
  useBooleanFlagInject
}

export const useProvider = () => {
  useBooleanFlagProvider()
}