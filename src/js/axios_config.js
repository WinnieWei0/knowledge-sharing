import axios from 'axios';
import {domain} from './api_config.js';
// 地址前默认添加端口号
axios.defaults.baseURL=domain;
// 跨域接口默认不添加cookie,需要手动开启cookie
axios.defaults.withCredentials=true;
export default axios;