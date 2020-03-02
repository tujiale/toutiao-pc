import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入UI
import axios from 'axios' // 引入axios
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/style/index.less'

Vue.use(ElementUI) // 全局注册element-ui框架
Vue.config.productionTip = false

// 配置axios的baseURL
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共的请求头地址
// 将axios赋值给 Vue对象的原型属性
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
