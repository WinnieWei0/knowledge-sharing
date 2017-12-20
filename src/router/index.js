import Login from '../component/login/Login.vue';
import Admin from '../component/admin/Admin.vue';
import goodsList from '../component/admin/goods/goodsList.vue';
import goodsAdd from '../component/admin/goods/goodsAdd.vue';
import goodsEdit from '../component/admin/goods/goodsEdit.vue';
// console.log('login');
export default {
  routes:[
    // 后台管理首页
    { name: 'a', path: '/', component: Admin,children:[
      // 后台商品子组件
      { name: 'gl', path: 'goods/list', component: goodsList},
      { name: 'ga', path: 'goods/add', component: goodsAdd},
      { name: 'ge', path: 'goods/edit/:id', component: goodsEdit},
    ]},
    {name:'l',path:'/login',component:Login}
  ]
}