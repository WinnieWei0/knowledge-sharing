import Home from '../component/home/Home.vue';
import Login from '../component/login/Login.vue';
import Admin from '../component/admin/Admin.vue';
export default {
  routes:[
    // 后台管理首页
    { name: 'h', path: '/', component: Admin},
    {name:'l',path:'/login',component:Login}
  ]
}