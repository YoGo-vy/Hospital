import {
  provide,
  inject,
  reactive,
} from '@vue/composition-api'

const bfSymbol = Symbol('BooleanFlag')

export const useBooleanFlagProvider = () => {
  const BooleanFlag = reactive({
    isDialogShow: false
  })
  const setBooleanFlag = (keys) => {
    keys.forEach(key => {
      if (Object.keys(BooleanFlag).includes(key)) {
        BooleanFlag[key] = !BooleanFlag[key]
      }
    })
  }
  provide(bfSymbol, {
    BooleanFlag,
    setBooleanFlag,
  })
}

export const useBooleanFlagInject = () => {
  return inject(bfSymbol);
};