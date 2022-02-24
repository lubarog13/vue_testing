import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
