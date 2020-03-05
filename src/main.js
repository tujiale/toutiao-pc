import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入UI
import axios from 'axios' // 引入axios
import '@/permission' // 引入权限模块
import Components from '@/components' // 引入components
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/style/index.less'

Vue.use(Components) // 注册开发自定义组件
Vue.use(ElementUI) // 全局注册element-ui框架
Vue.config.productionTip = false

// 将axios赋值给 Vue对象的原型属性
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
