import Vue from 'vue';
import VueRouter from 'vue-router';
import appComponent from './component/App.vue';
import routerConfig from "./router/index.js" ;   //自动寻找index.js
import api from './js/api_config.js';
import axios from './js/axios_config.js';
// 使用element-ui
import elementUI from 'element-ui';
import { } from 'element-ui//lib/theme-chalk/index.css';
import {} from 'normalize.css';
import {} from './less/index.less';
import guard from './router/guard.js';
// 把api,axios添加到Vue的原型中,可以通过this访问
Vue.prototype.$api=api;
Vue.prototype.$axios=axios;
// 启动router插件
Vue.use(VueRouter);
Vue.use(elementUI);
// 判断是否登录,守卫导航
const vueRouter = new VueRouter(routerConfig);
vueRouter.beforeEach(guard);

new Vue({
  el:'#app',
  render:c=>c(appComponent),
  router:vueRouter
  // router: new VueRouter()
});