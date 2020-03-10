<template>
  <!-- 二级路由的默认组件 -->
  <div class="second-home">
    <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://p0.ssl.cdn.btime.com/t01eb577203357396c9.gif?size=500x270',
        'http://hiphotos.baidu.com/feed/pic/item/cdbf6c81800a19d8b402264c3efa828ba61e4671.jpg',
        'http://05.imgmini.eastday.com/mobile/20180129/20180129130242_02a1425058e321e6296260973b376baa_13.gif',
        'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180528/707ebed5d7364256b3c5729c01cd3733.gif']
    }
  }
}
</script>

<style>
.second-home {
  /* calc 计算的意思 在css中计算数值 用法  calc ( 四则运算  ) 变量之间 和运算符之间一定要有空格 */
  height: calc(100vh - 60px);
   background-size: cover;
  background-image: url("http://www.caijiruanjian.com/lt/upMap/1483000062791.jpg")
}
</style>
