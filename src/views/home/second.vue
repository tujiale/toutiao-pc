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
        'http://img5.imgtn.bdimg.com/it/u=4027369142,1387227817&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=1354592590,1762022981&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1860762428,1491463374&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=1661663912,415523713&fm=26&gp=0.jpg']
    }
  }
}
</script>

<style>
.second-home {
  /* calc 计算的意思 在css中计算数值 用法  calc ( 四则运算  ) 变量之间 和运算符之间一定要有空格 */
  height: calc(100vh - 60px);
   background-size: cover;
  background-image: url("http://img0.imgtn.bdimg.com/it/u=3077306232,2328072934&fm=15&gp=0.jpg")
}
</style>
