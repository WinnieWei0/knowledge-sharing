import axios from 'axios';
import {domain} from './api_config.js';
// 地址前默认添加端口号
axios.defaults.baseURL=domain;
export default axios;