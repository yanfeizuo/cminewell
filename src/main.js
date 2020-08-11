import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/index.scss';

Vue.use(ElementUI);

import axios from 'axios'
import VueAxios from 'vue-axios'

import {home} from './config/home'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  home,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
