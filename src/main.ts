import Vue from 'vue'
import App from './App.vue'

import initVue from './init'

import 'static/css/base.css'

const init = initVue(Vue)

new Vue({
    ...init,
    render: h => h(App),
}).$mount('#app')