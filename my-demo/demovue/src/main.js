// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/less/base.less';
import './common/scss/base.scss';
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import store from "./store/index.js";
import App from './App'
import router from './router';

Vue.use(ElementUI);
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  template: '<App/>',
  components: { App }
})
