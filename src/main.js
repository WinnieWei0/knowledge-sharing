import Vue from 'vue';
import VueRouter from 'vue-router';
import appComponent from './component/App.vue';
import routerConfig from "./router/index.js" ;   //自动寻找index.js
// 启动router插件
Vue.use(VueRouter);
new Vue({
  el:'#app',
  render:c=>c(appComponent),
  router: new VueRouter(routerConfig)
});