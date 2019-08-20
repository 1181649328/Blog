import Vue from 'vue';
import App from './App.vue';
import VuerRouter from "vue-router";
import './registerServiceWorker';
import animated from 'animate.css'; // npm install animate.css --save安装，再引入
import axios from 'axios';
import qs from 'qs'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Mybody from './components/body/Mybody.vue';
import {
  routes
} from './router/router'

//mavon markdown
Vue.use(mavonEditor)

//axios
Vue.prototype.axios = axios;
Vue.prototype.HOST = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头

//axios添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') { // post请求时，处理数据
    config.data = qs.stringify({
      ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
    })
  }
  return config;
}, function (error) {
  loadinginstace.close()
  return Promise.reject(error);
})

//axios添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});



Vue.use(VuerRouter)
Vue.use(animated)
Vue.config.productionTip = false
Vue.component('Mybody', Mybody)
//过滤器名字
Vue.filter("Search", function (value) {
  return
})


const router = new VuerRouter({
  routes,
  mode: "history"
})


new Vue({
  router,
  render: h => h(App),
  components: {
    Mybody
  }

}).$mount('#app')