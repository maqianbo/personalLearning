import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import './utils/rem.js' //定义1rem
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Print from '@/utils/print.js'



Vue.use(ElementUI);
Vue.use(Print);

import '@/styles/index.scss' //全局样式

//路由拦截器
import '@/router/interceptor.js'

require('@/mock');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')