import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueAxios,
  axios,
  VueRouter,
  render: h => h(App)
}).$mount('#app')
