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
        'http://img0.imgtn.bdimg.com/it/u=3866544362,3357666236&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2320813231,2555689438&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3191686803,1058311632&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=195477394,2352983245&fm=26&gp=0.jpg']
    }
  }
}
</script>

<style>
.second-home {
  /* calc 计算的意思 在css中计算数值 用法  calc ( 四则运算  ) 变量之间 和运算符之间一定要有空格 */
  height: calc(100vh - 60px);
   background-size: cover;
  background-image: url("http://img4.imgtn.bdimg.com/it/u=1635521659,2556806373&fm=26&gp=0.jpg")
}
</style>
