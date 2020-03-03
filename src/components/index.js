// 需要使用Vue.use的方式去注册
// Vue.use会调用对象中的install方法 install方法第一个参数 是Vue对象
import Header from './home/header'
import Layout from './home/layout'

export default {
  install: function (Vue) {
    //   注册全局组件 Vue 一旦注册 在任意位置都可以使用
    Vue.component('header', Header) // 注册头部组件
    Vue.component('layout', Layout) // 注册左侧导航组件
  }
}
