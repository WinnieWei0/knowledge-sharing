import axios from 'axios';
import api from '../js/api_config.js';

export default (to,from,next)=>{
  axios.get(api.islogin).then(res=>{
    // console.log(to);
    let toPage = to.name;
    let isLogin =res.data.code=='logined';
    // 用name比较,去往登录页面,如果已经登陆则调往首页
    if(toPage=='l'){
      if(isLogin){
        next('/');
      }else{
        next();
      }
    }
    // 用name比较,去往非登录页面,如果已经登陆则调往首页,没登录跳登录页面
    if (toPage != 'l') {
      if (isLogin) {
        next();
      } else {
        next('/login');
      }
    }
  });
}