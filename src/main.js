import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock'
Vue.config.productionTip = false

new Vue({
  router,
  mock,
  render: h => h(App),
}).$mount('#app')
